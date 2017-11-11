import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeersService {
	baseUrl: string = '';

  constructor(private http: Http) { 
  	if (isDevMode()) this.baseUrl = 'http://localhost:3000';
  }

  /* get beer profile from api */
  getBeerProfileInfo(beerId){
  	return this.http.get(`${this.baseUrl}/api/beers/${beerId}`);
  }

  /* create a new beer with form information */
  createBeer(newBeer){
  	return this.http.post(`${this.baseUrl}/api/beers`, newBeer);
  }

  /* edit a beer with form information */
  editBeer(beerId, editedBeer){
  	return this.http.put(`${this.baseUrl}/api/beers/${beerId}`, editedBeer);
  }

  /* delete a beer */
  deleteBeer(beerId){
  	return this.http.delete(`${this.baseUrl}/api/beers/${beerId}`);
  }

}
