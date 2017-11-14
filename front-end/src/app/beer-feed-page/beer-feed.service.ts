import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeerFeedService {
	baseUrl = '';

	getBeerFeed(){
		return this.http.get(this.baseUrl + '/api/beers');
	}

	searchBeer(searchParams) {
		return this.http.get(this.baseUrl + '/api/searchBeer?id=' + searchParams);
	}

  constructor(private http : Http) {
  	if (isDevMode()){
  		this.baseUrl = "http://localhost:3000";
  	}
  }
}
