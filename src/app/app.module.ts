import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CharacterListComponent } from './character-list/character-list.component';
import { MatIconModule } from '@angular/material/icon';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './character/detail/detail.component';
import { CharacterModule } from './character/character.module';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    AccueilComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    CharacterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
