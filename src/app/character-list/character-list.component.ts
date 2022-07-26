import { animate, style, transition, trigger, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  animations: [
    trigger('hoverNothover', [
      state('hover', style({ left: '-50px' })),
      state('notHover', style({ left: 0 })),
      transition('notHover => hover', [
        animate('1s')
      ]),
      transition('hover => notHover', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  selectedChar!: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  isHover = false;

}
