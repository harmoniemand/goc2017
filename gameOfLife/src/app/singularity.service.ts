import { Injectable } from '@angular/core';
import {Cell} from "./model/cell";

@Injectable()
export class SingularityService {

  grid: Cell[][];

  constructor() {
  }

  GetCellState(grid: Cell[][], X: Number, Y: Number): boolean {
    return false;
  }

}
