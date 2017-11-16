import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { BeerFeedPageComponent } from './beer-feed-page/beer-feed-page.component';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    	declarations: [BeerFeedPageComponent],
    	imports: [AppRoutingModule],
      providers: [AuthGuard]
    });
  });

  // it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
