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
  		if (this.currentUserService.isLoggedIn()) {
  			return true;
  		} else {
  			this.router.navigate(['/welcome']);
  			return false;
  		}
    	
  }
}
