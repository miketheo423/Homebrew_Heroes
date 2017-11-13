import { Component, OnInit } from '@angular/core';
import { BeerFeedService } from './beer-feed.service';
import { CurrentUserService } from '../current-user.service';


@Component({
  selector: 'app-beer-feed-page',
  templateUrl: './beer-feed-page.component.html',
  styleUrls: ['./beer-feed-page.component.css']
})
export class BeerFeedPageComponent implements OnInit {
	beerArray = [];
  currentUser = {};

  constructor(private beerFeedService: BeerFeedService, private currentUserService: CurrentUserService) { }

  ngOnInit() {
  	this.beerFeedService.getBeerFeed().subscribe(response => {
  		this.beerArray = response.json().beers;
  		console.log(this.beerArray);
  	});

    this.currentUser = this.currentUserService.getCurrentUser();
    console.log(this.currentUser);

    this.currentUserService.userStatus().subscribe(response => {
      console.log(response);
    })
    
  }

}
