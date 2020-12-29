import { Component, OnInit } from '@angular/core';
import {routes as moduleRouter1} from './../../module1/routes';
import {routes as moduleRouter2} from './../../module2/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /** routes files modules*/
  mRoutes1 = moduleRouter1;
  mRoutes2 = moduleRouter2;

  constructor() { }

  ngOnInit(): void {
  }

}
