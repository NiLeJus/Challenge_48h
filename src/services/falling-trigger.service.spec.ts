import { TestBed } from '@angular/core/testing';

import { FallingTriggerService } from './falling-trigger.service';

describe('FallingTriggerService', () => {
  let service: FallingTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FallingTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
