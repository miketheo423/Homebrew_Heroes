import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { BeersModule } from './beers/beers.module';
import { UsersModule } from './users/users.module';

import { BeerFeedService } from './beer-feed-page/beer-feed.service';
import { CurrentUserService } from './current-user.service';
import { UserBeerFeedService } from './users/users.service';
import { AuthGuard } from './auth.guard';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { BeerFeedPageComponent } from './beer-feed-page/beer-feed-page.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpModalComponent,
    LoginModalComponent,
    BeerFeedPageComponent,
    BeerCardComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeersModule,
    UsersModule,
    AngularFontAwesomeModule,
    HttpModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    BeerFeedService,
    CurrentUserService,
    BeerFeedService,
    UserBeerFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
