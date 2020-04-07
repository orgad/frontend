import { TestBed } from '@angular/core/testing';

import { UdcService } from './udc.service';

describe('UdcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UdcService = TestBed.get(UdcService);
    expect(service).toBeTruthy();
  });
});
