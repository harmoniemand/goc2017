import { Injectable } from '@angular/core';
import { Cell } from './cell';

@Injectable()
export class SingularityService {

  grid: Cell[];

  constructor() { }

  SetGrid (grid: Cell[]) {
    this.grid = grid;
  }

  GetCellState (cell: Cell): boolean {

    return false;
  }

}
