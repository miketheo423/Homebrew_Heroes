import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { Router } from '@angular/router';

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

  constructor(private beersService : BeersService, private router: Router) { }

  ngOnInit() {
  }

 	saveBeer(){
 		console.log(this.newBeer);
 		this.beersService.createBeer(this.newBeer)
 			.subscribe(response => {
 				console.log(response);
 				if (response.json().name === this.newBeer.name){
 					this.router.navigate(['/beers']);
 				}
 			})
 	}

}
