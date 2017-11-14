import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BeersNewComponent } from './beers-new/beers-new.component';
import { BeersShowComponent } from './beers-show/beers-show.component';
import { BeersEditComponent } from './beers-edit/beers-edit.component';
import { BeersService } from './beers.service';
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [BeersNewComponent, BeersShowComponent, BeersEditComponent],
  providers: [BeersService]
})
export class BeersModule { }
