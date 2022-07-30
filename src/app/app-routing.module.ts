import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, data: { animation: 'HomePage' }},
  {path: 'characters', component: CharacterListComponent, data: { animation: 'CharactersPage' }},
  {path: 'addCharacter', component: AddCharacterComponent, data: { animation: 'AddCharacterPage' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
