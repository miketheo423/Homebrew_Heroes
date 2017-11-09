import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersNewComponent } from './beers-new.component';

describe('BeersNewComponent', () => {
  let component: BeersNewComponent;
  let fixture: ComponentFixture<BeersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
