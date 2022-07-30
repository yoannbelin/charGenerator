import { Injectable } from '@angular/core';
import { Classe } from '../models/classe';
import { CLASSES } from '../mocks/mock-classes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor() { }

  getClasses(): Observable<Classe[]>{
    const classes = of(CLASSES);
    return classes;
  }
}
