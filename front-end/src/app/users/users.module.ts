import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UserBeerFeedService } from './users.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UsersShowComponent, UsersEditComponent],
  providers: [UserBeerFeedService]
})
export class UsersModule { }
