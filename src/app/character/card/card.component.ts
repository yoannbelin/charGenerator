import { Component, OnInit, Output, Input, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { animate, style, transition, trigger, state, query, animateChild } from '@angular/animations';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isDeleted:boolean = false;

  @Output() newDeletedChar = new EventEmitter<Character>();

  @Output() newSelectedChar = new EventEmitter<Character>();

  @Input() character!: Character;

  constructor(private elementRef:ElementRef) {
  }

  ngOnInit(): void {
  }

  changeSelectedChar(value: Character){
    this.newSelectedChar.emit(value);
  }

  deleteChar(char: Character){
    this.newDeletedChar.emit(char);
  }
}
