import { TestBed } from '@angular/core/testing';

import { UnfreezeService } from './unfreeze.service';

describe('UnfreezeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnfreezeService = TestBed.get(UnfreezeService);
    expect(service).toBeTruthy();
  });
});
