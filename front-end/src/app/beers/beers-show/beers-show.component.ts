import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { ActivatedRoute } from '@angular/router'
import { CurrentUserService } from '../../current-user.service';

@Component({
  selector: 'app-beers-show',
  templateUrl: './beers-show.component.html',
  styleUrls: ['./beers-show.component.css']
})
export class BeersShowComponent implements OnInit {

	oneBeer;
  currentBrewerId;

  constructor(
  	private route: ActivatedRoute,
  	private beersService: BeersService,
    private currentUserService: CurrentUserService
  	) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.beersService.getBeerProfileInfo(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneBeer = response.json();
  		});
  	});

    /* Tie current brewer id to the current user in the user service */
    this.currentBrewerId = this.currentUserService.getId();
    this.currentUserService.onUserUpdated(user => {
      this.currentBrewerId = user.id;
      console.log(this.currentBrewerId);
    });
  }

  deleteBeer() {
    console.log('yay hooray');
    let userId = this.oneBeer.userId
    console.log(userId)
    this.beersService.deleteBeer(this.oneBeer.id)
    .subscribe(response => {
      console.log(response.json());
      window.location.href = "/brewer/" + userId;
    })
  }

  myBeer(){
    /* conditional to show edit and delete buttons */
    return this.currentBrewerId == this.oneBeer.userId;
  }

}
