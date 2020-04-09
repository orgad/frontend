import { TestBed } from '@angular/core/testing';

import { AdjService } from './adj.service';

describe('AdjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdjService = TestBed.get(AdjService);
    expect(service).toBeTruthy();
  });
});
