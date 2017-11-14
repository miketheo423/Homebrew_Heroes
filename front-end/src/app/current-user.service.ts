import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentUserService {
	currentUser = <any>{};
	baseUrl = '';
	private subject = new Subject();
	private isLoggedIn: boolean = false;

  constructor(private http: Http) { 
  	if(isDevMode()) this.baseUrl = 'http://localhost:3000';
  }

  private updateSubject(){
  	this.subject.next(this.currentUser);
  }

  updateCurrentUser(user){
  	/* return the current user object */
  	this.currentUser = user;
  	this.updateSubject();
  }

  getCurrentUser(){
  	/* call backend to get the currently logged-in user */
  	return this.http.get(`${this.baseUrl}/auth/currentuser`, {withCredentials: true});
  }

  onUserUpdated(callback){
  	return this.subject.asObservable().subscribe(callback);
  }

  getId(){
  	return this.currentUser.id;
  }

  logout(){
  	/* tell backend to logout user and delete frontend user */
  	this.updateCurrentUser({});
  	return this.http.get(`${this.baseUrl}/auth/logout`, {withCredentials: true});
  }


}
