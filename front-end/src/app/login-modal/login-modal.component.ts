import { Component, OnInit } from '@angular/core';
import { isDevMode } from '@angular/core';
import { CurrentUserService } from '../current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  /* INIT FORM AND ALERT DATA */
  signupForm = {
    email: '',
    password: ''
  }
  loginForm = {
    email: '',
    password: ''
  }
  loginMessage: string;
  signupMessage: string;

	BASE_URL = "";

  constructor(private currentUserService: CurrentUserService, private router: Router) { }

  ngOnInit() {
  	if (isDevMode()) {
  	 	this.BASE_URL = 'http://localhost:3000'
  	}
    this.loginMessage = "";
    this.signupMessage = "";
  }


  /* LOGIN & SIGNUP METHODS */

  signup(){
    this.currentUserService.signup(this.signupForm).subscribe(response => {
      if (response.json().username){
        console.log('signed up');
        this.router.navigate(['/']);
      } else {
        console.log(response.json());
      }
    })
  }

  login(){
    this.currentUserService.login(this.loginForm)
    .subscribe(response => {
      if (response.json().username){
        console.log('logged in');
        this.router.navigate(['/']);
      } else {
        console.log('failed login');
        console.log(response.json());
      }
    })
  }


  /* VALIDATION AND ALERTS */

  validLogin(){
    // TODO: Check email is valid format ie xxx@xxx.xx
    if (this.loginForm.email && this.loginForm.password){
      this.loginMessage = "";
      return false;
    } else {
      this.loginMessage = "Please enter an email and password"
      return true;
    }
  }

  validSignup(){
    // TODO: Check email is valid format ie xxx@xxx.xx
    if (this.signupForm.email && this.signupForm.password){
      this.signupMessage = "";
      return false;
    } else {
      this.signupMessage = "Please enter an email and password"
      return true;
    }
  }
}
