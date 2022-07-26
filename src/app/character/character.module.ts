import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DetailComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    DetailComponent,
    CardComponent
  ]
})
export class CharacterModule { }
