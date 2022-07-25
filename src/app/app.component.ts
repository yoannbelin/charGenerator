import { Component } from '@angular/core';
import { Character } from './character';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {

  title = 'chargenerator';

  constructor(private contexts: ChildrenOutletContexts){

  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
