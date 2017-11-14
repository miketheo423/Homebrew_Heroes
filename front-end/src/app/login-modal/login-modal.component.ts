import { Component, OnInit } from '@angular/core';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

	BASE_URL = "";

  constructor() { }

  ngOnInit() {
  	if (isDevMode()) {
  	 	this.BASE_URL = 'http://localhost:3000'
  	}
  }

  

}
