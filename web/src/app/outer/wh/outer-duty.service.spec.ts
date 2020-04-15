import { TestBed } from '@angular/core/testing';

import { OuterDutyService } from './outer-duty.service';

describe('OuterDutyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterDutyService = TestBed.get(OuterDutyService);
    expect(service).toBeTruthy();
  });
});
