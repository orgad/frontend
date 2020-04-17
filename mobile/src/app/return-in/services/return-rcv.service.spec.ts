import { TestBed } from '@angular/core/testing';

import { ReturnRcvService } from './return-rcv.service';

describe('ReturnRcvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturnRcvService = TestBed.get(ReturnRcvService);
    expect(service).toBeTruthy();
  });
});
