import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private currentUserService : CurrentUserService){}

  canActivate(next: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  		/* Check if user logged in */
  		let promise: Promise<boolean> = new Promise((resolve) => {
  			this.currentUserService.getCurrentUser().subscribe(response => {
  				if (response.json().username){
  					/* user is logged in */
  					this.currentUserService.updateCurrentUser(response.json());
  					resolve(true);
  				} else {
  					/* user is not logged in */
  					this.currentUserService.updateCurrentUser({});
  					this.router.navigate(['/welcome']);
  					resolve(false);
  				}
  			})
  		})

    	return promise;
  }
}
