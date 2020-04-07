import { TestBed } from '@angular/core/testing';

import { StockCheckService } from './stock-check.service';

describe('StockCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockCheckService = TestBed.get(StockCheckService);
    expect(service).toBeTruthy();
  });
});
