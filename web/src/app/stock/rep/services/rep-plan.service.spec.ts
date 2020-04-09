import { TestBed } from '@angular/core/testing';

import { RepPlanService } from './rep-plan.service';

describe('RepPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepPlanService = TestBed.get(RepPlanService);
    expect(service).toBeTruthy();
  });
});
