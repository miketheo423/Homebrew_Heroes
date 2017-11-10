import { TestBed, inject } from '@angular/core/testing';

import { BeerFeedService } from './beer-feed.service';

describe('BeerFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerFeedService]
    });
  });

  it('should be created', inject([BeerFeedService], (service: BeerFeedService) => {
    expect(service).toBeTruthy();
  }));
});
