import { Component, OnInit } from '@angular/core';
import { isDevMode } from '@angular/core';
import { CurrentUserService } from '../current-user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  signupCredentials = {
    email: '',
    password: ''
  }
  loginCredentials = {
    email: '',
    password: ''
  }

	BASE_URL = "";

  constructor(private currentUserService: CurrentUserService, private router: Router) { }

  ngOnInit() {
  	if (isDevMode()) {
  	 	this.BASE_URL = 'http://localhost:3000'
  	}
  }

  signUp(){
    /* utilize the signup method in the currentUserService */
    /* If signup successful, store the user in the browser storage and redirect */
    this.currentUserService.signUp(this.signupCredentials).subscribe(response => {
      // TODO: add user to browser storage
      // TODO: show error messages
      console.log(response.json());
      if (response.json().message) {
        console.log(response.json().message);
      } else {
        this.currentUserService.updateCurrentUser(response.json());
        this.router.navigate(['/']);
      }
    });
  }

  login(){
    console.log(this.loginCredentials);
    this.currentUserService.login(this.loginCredentials).subscribe(response => {
      // TODO: add user to browser storage
      // TODO: show error messages
      if (response.json().message){
        console.log(response.json().message);
      } else {
        /* Login and redirect */
        this.currentUserService.updateCurrentUser(response.json());
        this.router.navigate(['/']);
      }

    })
  }

  

}
