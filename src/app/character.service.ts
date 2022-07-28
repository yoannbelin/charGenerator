import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(): Observable<Character[]>{
    const characters = of(CHARACTERS);
    return characters;
  }

  deleteCharacter(char: Character){
    const i = CHARACTERS.indexOf(char);
    CHARACTERS.splice(i, 1);
  }
}
