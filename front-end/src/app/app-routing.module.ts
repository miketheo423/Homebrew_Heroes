import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGaurd } from 

import { BeerFeedPageComponent } from './beer-feed-page/beer-feed-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsersShowComponent } from './users/users-show/users-show.component';
import { BeersShowComponent } from './beers/beers-show/beers-show.component';

const routes: Routes = [
	{
		path: '',
		component: BeerFeedPageComponent //, canActivate: [AuthGaurd]
	},
	{
		path: 'welcome',
		component: LandingPageComponent
	}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}