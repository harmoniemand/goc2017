import {TestBed, inject} from '@angular/core/testing';

import {SingularityService} from './singularity.service';

describe('SingularityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingularityService]
    });
  });

  it('should be created', inject([SingularityService], (service: SingularityService) => {
    expect(service).toBeTruthy();
  }));

  it('Does GetCellState exist', inject([SingularityService], (service: SingularityService) => {
    expect(service.GetCellState != null).toBeTruthy();
  }));
});
