import { TestBed } from '@angular/core/testing';

import { FreezeService } from './freeze.service';

describe('FreezeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreezeService = TestBed.get(FreezeService);
    expect(service).toBeTruthy();
  });
});
