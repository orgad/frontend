import { TestBed } from '@angular/core/testing';

import { ReturnOutService } from './return-out.service';

describe('ReturnOutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturnOutService = TestBed.get(ReturnOutService);
    expect(service).toBeTruthy();
  });
});
