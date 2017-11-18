import {Injectable} from '@angular/core';
import {Cell} from './cell';

@Injectable()
export class SingularityService {

  grid: Cell[];

  constructor() {
  }

  SetGrid(grid: Cell[]) {
    this.grid = grid;
  }

  GetCellState(cell: Cell): boolean {
    const neighbours = this.grid
      .filter(item => ((item.X >= cell.X - 1 && item.X <= cell.X + 1) && (item.Y >= cell.Y - 1 && item.Y <= cell.Y + 1)))
      .filter(item => (item.X === cell.X && item.Y === cell.Y));

    if (neighbours.length < 2) {
      return false;
    }

    return true;
  }

}
