import { Injectable } from '@angular/core';
import { Race } from '../models/race';
import { RACES } from '../mocks/mock-races';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  getRaces(): Observable<Race[]>{
    const races = of(RACES);
    return races;
  }
}
