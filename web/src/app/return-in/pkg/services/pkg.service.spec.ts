import { TestBed } from '@angular/core/testing';

import { PkgService } from './pkg.service';

describe('PkgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PkgService = TestBed.get(PkgService);
    expect(service).toBeTruthy();
  });
});
