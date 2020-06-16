import { TestBed } from '@angular/core/testing';

import { MatService } from './mat.service';

describe('MatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatService = TestBed.get(MatService);
    expect(service).toBeTruthy();
  });
});
