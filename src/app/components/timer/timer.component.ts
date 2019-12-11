import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  // function floor for HTML
  public floor = Math.floor;
  public timeCounter = 0;
  public arrowPosition: any = {
    x: 101,
    y: 0,
  };
  public time: any = {};
  private interval = interval( 20 );
  private intervalSubscribe;

  constructor(
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.time.pauseTime = [];
    this.time.contineTime = [];
    this.time.subscribe = false;

    this.zone.runOutsideAngular( () => {
      window.addEventListener('beforeunload', this.beforeunload.bind(this) );
      document.addEventListener('visibilitychange', this.visibilitychange.bind(this));
    } );
  }

  // function control page close or page reload
  private beforeunload(e: any) {
    const myPageIsDirty = true; // you implement this logic...
    if ( myPageIsDirty ) {
      e.preventDefault(); // per the standard
      e.returnValue = 'If you close this page all your data is not save!'; // required for Chrome
    }
    // else: user is allowed to leave without a warning dialog
  }

  // function control user jumping between page
  private visibilitychange() {
    if ( this.timeCounter > 0 && this.time.subscribe ) {
      if (document.hidden) {
        this.time.pageLeave =  new Date().getTime();
      } else {
        this.time.pageEnter =  new Date().getTime();
        this.timeCounter = this.time.pageEnter - this.time.start;
        this.time.contineTime.forEach( ( v, i, arr ) => {
          this.timeCounter = this.timeCounter - ( this.time.contineTime[i] - this.time.pauseTime[i] );
        });
      }
    }
  }

  // run Timer
  public startTimer() {
    this.time.start = new Date().getTime();
    this.timeCounter = 0;
    this.runInterval();
  }

  // stop interval
  public stopInerval() {
    this.time.subscribe = false;
    this.intervalSubscribe.unsubscribe();
  }

  // run interval
  public runInterval() {
    this.time.subscribe = true;
    this.intervalSubscribe = this.intervalSubscribe ? this.intervalSubscribe.unsubscribe() : 0;
    this.intervalSubscribe = this.interval
    .pipe()
    .subscribe( x => {
      this.timeCounter += 20 ;
      const anngle = ((( (this.timeCounter / 1000) % 60 ) / 60 ) * Math.PI * 2) - Math.PI / 2;
      this.arrowPosition.x = Math.cos( anngle ) * 101 + 101;
      this.arrowPosition.y = Math.sin( anngle ) * 101 + 101;
    } );
  }

  // pause timer
  public pauseTimer() {
    this.time.pauseTime.push( new Date().getTime() );
    this.stopInerval();
  }

  // contine timer
  public contineTimer() {
    this.time.contineTime.push( new Date().getTime() );
    this.runInterval();
  }

  // Called once, before the instance is destroyed.
  ngOnDestroy(): void {
    this.stopInerval();
    this.zone.runOutsideAngular( () => {
      window.removeEventListener('beforeunload', this.beforeunload );
      document.removeEventListener('visibilitychange', this.visibilitychange);
    } );
  }

}
