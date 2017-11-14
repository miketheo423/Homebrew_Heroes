import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { BeerFeedPageComponent } from './beer-feed-page/beer-feed-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { UsersShowComponent } from './users/users-show/users-show.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';

import { BeersShowComponent } from './beers/beers-show/beers-show.component';
import { BeersEditComponent } from './beers/beers-edit/beers-edit.component';
import { BeersNewComponent } from './beers/beers-new/beers-new.component';

const routes: Routes = [
	{
		path: '',
		component: BeerFeedPageComponent, 
		canActivate: [AuthGuard]
	},
	{
		path: 'welcome',
		component: LandingPageComponent
	},
	/* beers and user routes could be broken out into module routes */
	{
		path: 'beers',
		children: [
			{
				path: '',
				component: BeerFeedPageComponent, 
				canActivate: [AuthGuard]
			},
			{
				path: 'new',
				component: BeersNewComponent,
				canActivate: [AuthGuard]
			},
			{
				path: 'edit/:id',
				component: BeersEditComponent,
				canActivate: [AuthGuard]
			},
			{
				path: ':id',
				component: BeersShowComponent,
				canActivate: [AuthGuard]
			}
		]
	},
	{
		path: 'brewer',
		children: [
			{
				path: 'edit', // :id not necessary becuase user will only be able to edit their own profile
				component: UsersEditComponent,
				canActivate: [AuthGuard]
			},
			{
				path: ':userName', // individual user profile homebrewheroes.com/brewer/mrbrew
				component: UsersShowComponent
			}
		]
	},

	// all others redirect to beer feed
	{ path: '**', redirectTo: '' }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}