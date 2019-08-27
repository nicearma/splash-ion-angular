import { TestBed } from '@angular/core/testing';

import { InitNotifierService } from './init-notifier.service';

describe('InitNotifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitNotifierService = TestBed.get(InitNotifierService);
    expect(service).toBeTruthy();
  });
});
