import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { BeerFeedService } from './beer-feed.service';

import { BeerFeedPageComponent } from './beer-feed-page.component';

describe('BeerFeedPageComponent', () => {
  let component: BeerFeedPageComponent;
  let fixture: ComponentFixture<BeerFeedPageComponent>;
  let search;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerFeedPageComponent ],
      imports: [FormsModule, RouterModule, HttpModule],
      providers: [BeerFeedService]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFeedPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    search = document.querySelector('form');
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search bar', () => {
    expect(search).toBeTruthy();
  })

  it('should get an array of beers', () => {
    component.beerFeedService.getBeerFeed().subscribe(response => {
      component.beerArray = response.json().beers;
      expect(component.beerArray.length).toBeGreaterThan(0);
    })
    
  })
});
