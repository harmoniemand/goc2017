import { Injectable } from '@angular/core';

@Injectable()
export class SingularityService {

  constructor() { }

  GetCellState(): boolean {
    console.log('GetCellState');
    return true;
  }

}
