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

	darkBeers = ['Stout', 'Porter', 'Schwarzbier']
	wheatBeers = ['Hefeweizen', 'American Wheat Beer', 'Witbier']
	brownBeers = ['Brown Ale', 'Scottish Ale']
	IPAS = ['American IPA', 'Double IPA', 'Triple IPA', 'English IPA', 'Amber Ale']
	sours = ['Sour', 'Gose']

  constructor(private beersService : BeersService, private router: Router) { }

  ngOnInit() {
  }

 	saveBeer(){
 		// Conditionals to determine what photo is assigned to new beer
 		if (this.darkBeers.includes(this.newBeer.style)) {
 			this.newBeer.photoUrl = "http://hopworksbeer.com/wp-content/uploads/2015/07/HUB_Site_Pint_STOUT.jpg"
 		} else if (this.wheatBeers.includes(this.newBeer.style)) {
 			this.newBeer.photoUrl = "http://cervezacasera.com.mx/wp-content/uploads/2016/02/Kit_Todo_Grano_T_54c1743c49f7e.jpg"
 		} else if (this.brownBeers.includes(this.newBeer.style)) {
 			this.newBeer.photoUrl = "https://www.ritebrew.com/v/vspfiles/photos/851316-2.jpg"
 		} else if (this.IPAS.includes(this.newBeer.style)) {
 			this.newBeer.photoUrl = "https://www.mrbeer.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beer-amber-pintulw_4.jpg"
 		} else if (this.sours.includes(this.newBeer.style)) {
 			this.newBeer.photoUrl = "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/berliner-weisse.jpg"
 		} else if (this.newBeer.style === 'Pilsner') {
 			this.newBeer.photoUrl = "https://www.displayfakefoods.com/store/pc/catalog/2359-lg.jpg"
 		}

 		this.beersService.createBeer(this.newBeer)
 			.subscribe(response => {
 				console.log(response.json());
 				if (response.json().name === this.newBeer.name){
 					this.router.navigate(['/beers/' + response.json().id]);
 					// window.location.href = '/beers';
 				}
 			})
 	}

}
