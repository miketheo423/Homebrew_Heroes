import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { isDevMode } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  BASE_URL = "";

  constructor() { }

  ngOnInit() {
  	if (isDevMode()) {
  	 	this.BASE_URL = 'http://localhost:3000'
  	}
  }

}

    






