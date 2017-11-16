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

 	saveBeer(valid){
 		if (valid){
 			// check form validation
	 		this.newBeer.photoUrl = this.checkStyle(this.newBeer.style)
	 		this.beersService.createBeer(this.newBeer)
	 			.subscribe(response => {
	 				console.log(response.json());
	 				if (response.json().name === this.newBeer.name){
	 					this.router.navigate(['/beers/' + response.json().id]);
	 					// window.location.href = '/beers';
	 				}
	 			})
 		} else {
 			
 		}

 	}

 	checkStyle(style) {

 		let darkBeers = ['Stout', 'Porter', 'Schwarzbier']
 		let wheatBeers = ['Hefeweizen', 'American Wheat Beer', 'Witbier']
 		let brownBeers = ['Brown Ale', 'Scottish Ale']
 		let IPAS = ['American IPA', 'Double IPA', 'Triple IPA', 'English IPA', 'Amber Ale']
 		let sours = ['Sour', 'Gose']
 		let photoUrl = '';

		// Conditionals to determine what photo is assigned to new beer
 		if (darkBeers.includes(style)) {
 			photoUrl = "http://hopworksbeer.com/wp-content/uploads/2015/07/HUB_Site_Pint_STOUT.jpg"
 		} else if (wheatBeers.includes(style)) {
 			photoUrl = "http://cervezacasera.com.mx/wp-content/uploads/2016/02/Kit_Todo_Grano_T_54c1743c49f7e.jpg"
 		} else if (brownBeers.includes(style)) {
 			photoUrl = "https://www.ritebrew.com/v/vspfiles/photos/851316-2.jpg"
 		} else if (IPAS.includes(style)) {
 			photoUrl = "https://www.mrbeer.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beer-amber-pintulw_4.jpg"
 		} else if (sours.includes(style)) {
 			photoUrl = "https://centralbrew.com.br/image/cache/catalog/Categorias/receitas%20tradicionais/English_Ordinary_Bitter-500x500.jpg"
 		} else {
 			photoUrl = "https://www.displayfakefoods.com/store/pc/catalog/2359-lg.jpg"
 		}
 		return photoUrl;
 	}

}
