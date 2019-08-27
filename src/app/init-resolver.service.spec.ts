import { TestBed } from '@angular/core/testing';

import { InitGuard } from './init-resolver-guard.service';

describe('InitGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitGuard = TestBed.get(InitGuard);
    expect(service).toBeTruthy();
  });
});
