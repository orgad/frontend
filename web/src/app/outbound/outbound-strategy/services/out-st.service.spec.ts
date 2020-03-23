import { TestBed } from '@angular/core/testing';

import { OutStService } from './out-st.service';

describe('OutStService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutStService = TestBed.get(OutStService);
    expect(service).toBeTruthy();
  });
});
