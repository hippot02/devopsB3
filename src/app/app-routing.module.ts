import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeurBoutonComponent } from './components/feur-bouton/feur-bouton.component';
import { ImageFunComponent } from './components/image-fun/image-fun.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'feur', component: FeurBoutonComponent },
  { path: 'image', component: ImageFunComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
