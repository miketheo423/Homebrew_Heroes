import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	currentBrewerId;

  constructor(private currentUserService: CurrentUserService, private router: Router) { }

  ngOnInit() {
  	this.currentUserService.onUserUpdated(user => {
  		this.currentBrewerId = user.id;
  		console.log(this.currentBrewerId);
  	});
  	//console.log('nav user id: ' + this.currentBrewerId);
  }

  logout(){
  	this.currentUserService.logout().subscribe(response => {
  		this.router.navigate(['/welcome']);
  	})
  }

}
