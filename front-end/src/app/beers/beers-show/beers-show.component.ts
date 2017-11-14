import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-beers-show',
  templateUrl: './beers-show.component.html',
  styleUrls: ['./beers-show.component.css']
})
export class BeersShowComponent implements OnInit {

	oneBeer;

  constructor(
  	private route: ActivatedRoute,
  	private beersService: BeersService
  	) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.beersService.getBeerProfileInfo(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneBeer = response.json();
  		});
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

}
