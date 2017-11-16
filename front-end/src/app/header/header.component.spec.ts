import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module';
import { BeersModule } from '../beers/beers.module';
import { UsersModule } from '../users/users.module';

import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { BeerFeedPageComponent } from '../beer-feed-page/beer-feed-page.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from './header.component';

import { CurrentUserService } from '../current-user.service';

/*
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent,
        LoginModalComponent,
        BeerFeedPageComponent,
        FooterComponent,
        HeaderComponent ],
      imports: [ 
        BrowserModule,
        AppRoutingModule,
        BeersModule,
        UsersModule,
        HttpModule,
        RouterModule,
        FormsModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, CurrentUserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
