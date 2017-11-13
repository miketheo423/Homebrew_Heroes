import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentUserService {
	private baseUrl = ''
	currentUser = {}
	private subject = new Subject();

  constructor(private http: Http) { 
  	if (isDevMode()) this.baseUrl = 'http://localhost:3000';
  }

  private updateSubject(){
  	this.subject.next(this.currentUser);
  }

  getCurrentUser(){
  	return this.currentUser;
  	//return this.http.get(`${this.baseUrl}/auth/currentuser`);
  }

  updateCurrentUser(user){
  	this.currentUser = user;
  	this.updateSubject();
  }

  signUp(userCredentials){
  	return this.http.post(`${this.baseUrl}/auth/signup`, userCredentials);
  }

  login(userCredentials){
  	return this.http.post(`${this.baseUrl}/auth/login`, userCredentials);
  }

  userStatus(){
  	return this.http.get(`${this.baseUrl}/auth/currentuser`);
  }

}
