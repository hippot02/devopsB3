import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ImageFunComponent } from './components/image-fun/image-fun.component';
import { ImagePasFunComponent } from './components/image-pas-fun/image-pas-fun.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ImageFunComponent,
    ImagePasFunComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
