import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() selectedChar!: Character

  constructor() { }

  ngOnInit(): void {
  }

}
