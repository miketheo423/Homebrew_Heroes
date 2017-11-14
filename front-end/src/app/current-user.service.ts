import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CurrentUserService {
	currentUser = {};

  constructor(private http: Http) { }

  getCurrentUser(){

  }

  updateCurrentUser(){

  }

  isLoggedIn(): boolean{
  	return false;
  }


}
