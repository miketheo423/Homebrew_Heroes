import { TestBed, inject } from '@angular/core/testing';

import { BeerFeedService } from './beer-feed.service';
import { HttpModule } from '@angular/http';

describe('BeerFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [HttpModule],
      providers: [BeerFeedService]
    });
  });

  it('should be created', inject([BeerFeedService], (service: BeerFeedService) => {
    expect(service).toBeTruthy();
  }));
});
