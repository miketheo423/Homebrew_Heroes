import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginModalService {
	baseUrl = '';


	// postSignup(signupData) {
	// 	console.log(signupData);
	// 	let headers 
	// 	return this.http.post(this.baseUrl + '/auth/signup', signupData, {
	// 		headers: (new Headers()).append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
	// 	}).subscribe(response => {
	// 		console.log(response.json());
	// 	});
	// }

  constructor(private http : Http) {
  	if (isDevMode()){
  		this.baseUrl = "http://localhost:3000";
  	}
  }

}