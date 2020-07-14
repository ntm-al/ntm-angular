import { TestBed } from '@angular/core/testing';

import { NtmValidatorsService } from './ntm-validators.service';

describe('NtmValidatorsService', () => {
  let service: NtmValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtmValidatorsService);
  });

  it('should be created', () => {
    void expect(service).toBeTruthy();
  });
});
