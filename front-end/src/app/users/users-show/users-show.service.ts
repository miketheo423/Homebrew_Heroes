import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserBeerFeedService {
	baseUrl = '';

	  constructor(private http : Http) {
  	if (isDevMode()){
  		this.baseUrl = "http://localhost:3000";
  	}
  }

	getUserBeerFeed(userId){
		console.log(userId);
		return this.http.get(`${this.baseUrl}/api/users/${userId}`)
	}
 
}