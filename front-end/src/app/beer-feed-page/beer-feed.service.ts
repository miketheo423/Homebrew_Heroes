import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeerFeedService {
	baseUrl = '';

	getBeerFeed(){
		return this.http.get(this.baseUrl + '/api/beers');
	}

  constructor(private http : Http) {
  	if (isDevMode()){
  		this.baseUrl = "http://localhost:3000";
  	}
  }
}
