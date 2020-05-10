import { TestBed } from '@angular/core/testing';

import { TmplService } from './tmpl.service';

describe('TmplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmplService = TestBed.get(TmplService);
    expect(service).toBeTruthy();
  });
});
