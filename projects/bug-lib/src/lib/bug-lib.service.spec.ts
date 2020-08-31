import { TestBed } from '@angular/core/testing';

import { BugLibService } from './bug-lib.service';

describe('BugLibService', () => {
  let service: BugLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
