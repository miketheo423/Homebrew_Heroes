import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beers-new',
  templateUrl: './beers-new.component.html',
  styleUrls: ['./beers-new.component.css']
})
export class BeersNewComponent implements OnInit {
	newBeer = {
		name: '',
		style: '',
		abv: '',
		ibus: '',
		photoUrl: '',
		description: '',
		recipe: ''
	}

  constructor(private beersService : BeersService) { }

  ngOnInit() {
  }

 	saveBeer(){
 		console.log(this.newBeer);
 		this.beersService.createBeer(this.newBeer)
 			.subscribe(response => {
 				console.log(response.json());
 			})
 	}

}
