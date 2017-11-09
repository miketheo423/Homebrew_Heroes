import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
