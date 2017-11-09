import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersNewComponent } from './beers-new/beers-new.component';
import { BeersShowComponent } from './beers-show/beers-show.component';
import { BeersEditComponent } from './beers-edit/beers-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BeersNewComponent, BeersShowComponent, BeersEditComponent]
})
export class BeersModule { }
