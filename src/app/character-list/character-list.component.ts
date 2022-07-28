import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { animate, style, transition, trigger, state, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  animations: [
    trigger('fade', [
      transition('* => void', [
        animate(500, style({ transform: 'translateX(-200%)' }))
      ])
    ])
  ]
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  selectedChar!: Character;

  deletedChar!: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  newSelectedChar(newChar: Character){
    this.selectedChar = newChar;
  }

  deleteChar(deletedChar: Character){
    this.characterService.deleteCharacter(deletedChar);
  }

}
