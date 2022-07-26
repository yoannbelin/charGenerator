import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger, state, query, animateChild } from '@angular/animations';
import { Character } from 'src/app/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('hoverNothover', [
      state('hover', style({ left: '-50px' })),
      state('notHover', style({ left: 0 })),
      transition('notHover <=> hover', [
        animate('0.2s'),
        query('@test', animateChild()),
      ])
    ]),
    trigger('test', [
      state('hover', style({ right: '-51px' })),
      state('notHover', style({ right: 0 })),
      transition("notHover <=> hover", [
        animate('0.2s')
      ])
    ])
  ],
})
export class CardComponent implements OnInit {

  isHover = false;

  @Output() newSelectedChar = new EventEmitter<Character>();

  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

  changeSelectedChar(value: Character){
    this.newSelectedChar.emit(value);
  }

}
