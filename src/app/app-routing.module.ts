import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, data: { animation: 'HomePage' }},
  {path: 'characters', component: CharacterListComponent, data: { animation: 'CharactersPage' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
