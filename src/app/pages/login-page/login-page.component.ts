import { trigger, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { HttpService } from './../../services/http.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({
            transform: 'translateX(100%)',
            height: '0px',
            opacity: 0,
          }),
          animate('300ms', style({
            transform: 'translateX(0)',
            height: '22px',
            opacity: 1
          }))
        ]),
        transition(':leave', [
          style({
            transform: 'translateX(0)',
            height: '22px',
            opacity: 1
          }),
          animate('500ms', style({
            transform: 'translateX(100%)',
            height: '0px',
            opacity: 0
          }))
        ])
      ]
    )
  ],
})
export class LoginPageComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  public formData: any = {
    login: '',
    password: ''
  };

  ngOnInit() {
  }

  /*
  * Validate Form
  * Throe Errores if it is
  * @input form: NgForm
  */
  submit( form: NgForm ) {

    const erroreContainer: Array<string> = [];
    for ( const item of Object.keys( form.form.value ) ) {
      if ( !form.form.value[item] ) {
        erroreContainer.push(item);
      }
    }
    if ( erroreContainer.length === 0 ) {
      // do request
      console.log(this.httpService.loginUser( form.form.value ));
      this.router.navigate( ['/main'] );
      // subscribe(
      //   data => {
      //     console.log( data );
      //   },
      //   error => {
      //     console.log( error );
      //   }
      // )
    }
  }

}
