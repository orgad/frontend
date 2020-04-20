import { TestBed } from '@angular/core/testing';

import { RepStService } from './rep-st.service';

describe('RepStService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepStService = TestBed.get(RepStService);
    expect(service).toBeTruthy();
  });
});
