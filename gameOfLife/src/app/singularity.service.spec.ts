import {TestBed, inject} from '@angular/core/testing';

import {SingularityService} from './singularity.service';

import {Cell} from './model/cell';

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

  it('should return false if cell is alive and has less than two neigbours', inject([SingularityService], (service: SingularityService) => {

    const grid: Cell[][] = [
      [{state: false}, {state: false}, {state: false}],
      [{state: false}, {state: true}, {state: false}],
      [{state: false}, {state: false}, {state: false}]
    ];

    expect(service.GetCellState(grid, 1, 1)).toBeFalsy();
  }));
});
