import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersShowComponent, UsersEditComponent]
})
export class UsersModule { }
