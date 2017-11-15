import { Component, OnInit } from '@angular/core';
import { UserBeerFeedService } from '../users.service';
import { CurrentUserService } from '../../current-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {
    userBeerArray;
    oneUser = <any>{};


  constructor(
    private userBeerFeedService: UserBeerFeedService, 
    private route : ActivatedRoute,
    private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.route.params.forEach(param => {
    this.userBeerFeedService.getUserBeerFeed(param.id)
    .subscribe(response => {
      this.oneUser = response.json();
      this.userBeerArray = response.json().beers;
      });
    });
  }

  myProfile(){
    return this.oneUser.id == this.currentUserService.currentUser.id;
  }

}
