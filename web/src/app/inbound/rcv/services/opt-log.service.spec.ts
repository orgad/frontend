import { TestBed } from '@angular/core/testing';

import { OptLogService } from './opt-log.service';

describe('OptLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptLogService = TestBed.get(OptLogService);
    expect(service).toBeTruthy();
  });
});
