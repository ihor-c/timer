import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-app-bar',
  templateUrl: './header-app-bar.component.html',
  styleUrls: ['./header-app-bar.component.scss']
})
export class HeaderAppBarComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
