import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-beers-edit',
  templateUrl: './beers-edit.component.html',
  styleUrls: ['./beers-edit.component.css']
})
export class BeersEditComponent implements OnInit {

	editedBeer = <any>{};

  constructor(
  	private beersService : BeersService,
  	private route : ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.beersService.getBeerProfileInfo(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.editedBeer = response.json();
  		})
  	})
  }

  editBeer(valid) {
    if (valid){
      this.beersService.editBeer(this.editedBeer.id, this.editedBeer)
      .subscribe(response => {
        console.log(response);
        let beer = response.json();
        window.location.href = "/beers/" + beer.id;
      })
    }
  }
}
