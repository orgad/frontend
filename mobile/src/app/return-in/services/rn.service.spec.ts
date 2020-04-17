import { TestBed } from '@angular/core/testing';

import { RnService } from './rn.service';

describe('RnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RnService = TestBed.get(RnService);
    expect(service).toBeTruthy();
  });
});
