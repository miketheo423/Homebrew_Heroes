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
	userId;

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

  onUserUpdated(){
  	return this.subject.asObservable().subscribe(response => {
  		console.log(this.currentUser.username);
  		if (this.currentUser.username) {
  			this.isLoggedIn = true;
  			this.userId = this.currentUser.id;
  		} else {
  			this.isLoggedIn = false;
  			this.userId = null;
  		}
  	});
  }

  logout(){
  	/* tell backend to logout user and delete frontend user */
  }


}
