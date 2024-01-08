import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ImageFunComponent } from './components/image-fun/image-fun.component';
import { FeurBoutonComponent } from './feur-bouton/feur-bouton.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ImageFunComponent,
    FeurBoutonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
