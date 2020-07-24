import { TestBed } from '@angular/core/testing';

import { NtmCoreService } from './ntm-core.service';

describe('NtmCoreService', () => {
  let service: NtmCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtmCoreService);
  });

  it('should be created', () => {
    void expect(service).toBeTruthy();
  });
});
