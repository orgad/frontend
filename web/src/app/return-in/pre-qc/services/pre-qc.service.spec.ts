import { TestBed } from '@angular/core/testing';

import { PreQcService } from './pre-qc.service';

describe('PreQcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreQcService = TestBed.get(PreQcService);
    expect(service).toBeTruthy();
  });
});
