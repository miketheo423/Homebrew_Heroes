import { Component, OnInit } from '@angular/core';
import { BeerFeedService } from './beer-feed.service';

@Component({
  selector: 'app-beer-feed-page',
  templateUrl: './beer-feed-page.component.html',
  styleUrls: ['./beer-feed-page.component.css']
})


export class BeerFeedPageComponent implements OnInit {
	beerArray = [];
  style = "";

  constructor(private beerFeedService: BeerFeedService) { }

  ngOnInit() {
  	this.beerFeedService.getBeerFeed().subscribe(response => {
  		this.beerArray = response.json().beers;
  	})
  }

  searchBeer() {
    this.beerFeedService.searchBeer(this.style).subscribe(response => {
      this.beerArray = response.json().beers;
    })
  }

}
