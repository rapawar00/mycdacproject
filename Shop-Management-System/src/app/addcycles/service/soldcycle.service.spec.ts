import { TestBed } from '@angular/core/testing';

import { SoldcycleService } from './soldcycle.service';

describe('SoldcycleService', () => {
  let service: SoldcycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoldcycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
