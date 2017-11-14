import { Component, OnInit } from '@angular/core';
import { UserBeerFeedService } from './users-show.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {
    userBeerArray = [];

  constructor(private userBeerFeedService: UserBeerFeedService, private route : ActivatedRoute) { }

  ngOnInit() {
    console.log('yay hooray');
    this.route.params.forEach(param => {
    this.userBeerFeedService.getUserBeerFeed(param.id)
    .subscribe(response => {
      this.userBeerArray = response.json().beers;
      console.log(this.userBeerArray);
      });
    });
  }
  }



