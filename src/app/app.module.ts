import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ImageFunComponent } from './components/image-fun/image-fun.component';
import { FeurBoutonComponent } from './components/feur-bouton/feur-bouton.component';
import { ArcEnCielComponent } from './components/arc-en-ciel/arc-en-ciel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ImageFunComponent,
    FeurBoutonComponent,
    ArcEnCielComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
