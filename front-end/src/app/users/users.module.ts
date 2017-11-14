import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UserBeerFeedService } from './users-show/users-show.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersShowComponent, UsersEditComponent],
  providers: [UserBeerFeedService]
})
export class UsersModule { }
