import { Component, OnInit, Output, Input, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { animate, style, transition, trigger, state, query, animateChild } from '@angular/animations';
import { Character } from 'src/app/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('parentAnimation', [
      transition('notHover => hover', [
        query('@test2', [animateChild()]),
        query('@test', [animateChild()])
      ])
    ]),
    trigger('test2', [
      state('hover', style({ left: '-50px' })),
      state('notHover', style({ left: 0 })),
      transition("notHover => hover", [
        animate('0.2s')
      ])
    ]),
    trigger('test', [
      state('hover', style({ right: '-51px' })),
      state('notHover', style({ right: 0 })),
      transition("notHover => hover", [
        animate('0.2s')
      ])
    ]),
  ],
})
export class CardComponent implements OnInit {

  isDeleted:boolean = false;

  @Output() newSelectedChar = new EventEmitter<Character>();

  @Input() character!: Character;

  constructor(private elementRef:ElementRef) {
  }

  ngOnInit(): void {
  }

  changeSelectedChar(value: Character){
    this.newSelectedChar.emit(value);
  }
}
