import { TestBed } from '@angular/core/testing';

import { OuterBinService } from './outer-bin.service';

describe('OuterBinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterBinService = TestBed.get(OuterBinService);
    expect(service).toBeTruthy();
  });
});
