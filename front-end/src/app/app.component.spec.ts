import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BeerFeedService } from './beer-feed-page/beer-feed.service';
import { CurrentUserService } from './current-user.service';
import { UserBeerFeedService } from './users/users.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { BeerFeedPageComponent } from './beer-feed-page/beer-feed-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { BeersModule } from './beers/beers.module';
import { UsersModule } from './users/users.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LandingPageComponent,
        LoginModalComponent,
        BeerFeedPageComponent,
        FooterComponent,
        HeaderComponent
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
        {provide: APP_BASE_HREF, useValue : '/' },
        AuthGuard,
        BeerFeedService,
        CurrentUserService,
        BeerFeedService,
        UserBeerFeedService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
