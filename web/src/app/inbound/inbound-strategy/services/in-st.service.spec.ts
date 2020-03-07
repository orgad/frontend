import { TestBed } from '@angular/core/testing';

import { InStService } from './in-st.service';

describe('InStService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InStService = TestBed.get(InStService);
    expect(service).toBeTruthy();
  });
});
