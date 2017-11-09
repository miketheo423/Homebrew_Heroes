import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFeedPageComponent } from './beer-feed-page.component';

describe('BeerFeedPageComponent', () => {
  let component: BeerFeedPageComponent;
  let fixture: ComponentFixture<BeerFeedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerFeedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
