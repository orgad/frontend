import { TestBed } from '@angular/core/testing';

import { MovePlanService } from './move-plan.service';

describe('MovePlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovePlanService = TestBed.get(MovePlanService);
    expect(service).toBeTruthy();
  });
});
