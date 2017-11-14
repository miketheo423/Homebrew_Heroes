import { Component, OnInit } from '@angular/core';
import { UserBeerFeedService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

	editedProfile = <any>{};

    constructor(private userBeerFeedService: UserBeerFeedService, private route : ActivatedRoute) { }


  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.userBeerFeedService.getUserBeerFeed(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.editedProfile = response.json();
  		})
  	})
  }

  editProfile() {
  	this.userBeerFeedService.editProfile(this.editedProfile.id, this.editedProfile)
  	.subscribe(response => {
  		let user = response.json();
      console.log(user);
  		window.location.href = "/brewer/" + user.id;
  	})
  }

}
