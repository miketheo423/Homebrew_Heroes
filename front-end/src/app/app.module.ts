import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BeersModule } from './beers/beers.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { BeerFeedPageComponent } from './beer-feed-page/beer-feed-page.component';
import { BeerCardComponent } from './beer-card/beer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpModalComponent,
    LoginModalComponent,
    BeerFeedPageComponent,
    BeerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeersModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
