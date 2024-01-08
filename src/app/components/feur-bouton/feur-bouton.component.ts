import { Component } from '@angular/core';

@Component({
  selector: 'app-feur-bouton',
  templateUrl: './feur-bouton.component.html',
  styleUrls: ['./feur-bouton.component.scss']
})
export class FeurBoutonComponent {
  feurAffiche: boolean = false;

  afficherFeur() {
    this.feurAffiche = true;
  }
}
