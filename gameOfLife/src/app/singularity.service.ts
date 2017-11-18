import { Injectable } from '@angular/core';
import { Cell } from "./model/cell";

@Injectable()
export class SingularityService {

  grid: Cell[][];

  constructor() {
  }

  GetCellState(grid: Cell[][], X: number, Y: number): boolean {

    let countAlives = 0;

    for (let i = X - 1; i > X + 1; i++) {
      for (let j = Y - 1; j > Y + 1; j++) {
        if (grid[i][j].state === true)
          countAlives++;
      }
    }

    // remove self if alive
    if (grid[X][Y].state == true)
      countAlives--;

    if (countAlives < 2)
      return false;



    return true;
  }

}
