import { TestBed } from '@angular/core/testing';

import { OuterProductService } from './outer-product.service';

describe('OuterProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterProductService = TestBed.get(OuterProductService);
    expect(service).toBeTruthy();
  });
});
