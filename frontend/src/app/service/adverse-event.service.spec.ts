import { TestBed } from '@angular/core/testing';

import { AdverseEventService } from './adverse-event.service';

describe('AdverseEventService', () => {
  let service: AdverseEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdverseEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
