import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BeersModule } from './beers/beers.module';
import { UsersModule } from './users/users.module';

import { BeerFeedService } from './beer-feed-page/beer-feed.service';
import { CurrentUserService } from './current-user.service';
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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpModalComponent,
    LoginModalComponent,
    BeerFeedPageComponent,
    BeerCardComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeersModule,
    UsersModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    BeerFeedService,
    CurrentUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
