import { TestBed } from '@angular/core/testing';

import { OuterZoneService } from './outer-zone.service';

describe('OuterZoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterZoneService = TestBed.get(OuterZoneService);
    expect(service).toBeTruthy();
  });
});
