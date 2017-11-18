import { TestBed, inject } from '@angular/core/testing';

import { SingularityService } from './singularity.service';
import { Cell } from './cell';

describe('SingularityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingularityService]
    });
  });

  it('should be created', inject([SingularityService], (service: SingularityService) => {
    expect(service).toBeTruthy();
  }));

  it('should return false for cell with no neightbours', inject([SingularityService], (service: SingularityService) => {    
    var cell = new Cell(1,1);
    service.SetGrid([cell]);

    expect(service.GetCellState(cell)).toBeFalsy();
  }));
});
