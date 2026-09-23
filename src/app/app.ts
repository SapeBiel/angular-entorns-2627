import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Joc } from './interfaces/joc';
import { ColleccioJocs  } from './ColleccioJocs';
import { saludar, esMajorEdat, sumarArray } from './funcions';
import { Alumne } from './alumne';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular-entorns-2627');

  joc1: Joc = {
    id: 1,
    nom: 'Valorant',
    preu: 0,
    multijugador: true
  };

  joc2: Joc = {
    id: 2,
    nom: 'League of Legends',
    preu: 0,
    multijugador: true
  };

  joc3: Joc = {
    id: 3,
    nom: 'Tetris',
    preu: 0,
    multijugador: false
  };

  joc4: Joc = {
    id: 4,
    nom: 'The Witcher 3: Wild Hunt',
    preu: 39.99,
    multijugador: false
  };

  joc5: Joc = {
    id: 5,
    nom: 'Minecraft',
    preu: 20,
    multijugador: true
  };

  // Array amb els 5 videojocs
  arrayjocs: Joc[] = [
    this.joc1,
    this.joc2,
    this.joc3,
    this.joc4,
    this.joc5
  ];

  // Retorna els videojocs multijugador
  getActius(): Joc[] {
    return this.arrayjocs.filter(joc => joc.multijugador === true);
  }

  findById(id: number): Joc | undefined {
    return this.arrayjocs.find(joc => joc.id === id);
  } 

  

  formatarElement(element: Joc): string {
  return `ID: ${element.id} | Nom: ${element.nom} | Preu: ${element.preu}€ | Multijugador: ${element.multijugador}`;
}

ngOnInit() {
  console.log(this.getActius());
    console.log(this.findById(1));
  console.log(this.formatarElement(this.joc1));

    this.provarColleccio();

   // Provar les funcions de funcions.ts
  console.log(saludar('Biel'));
  console.log(esMajorEdat(18));
  console.log(sumarArray([10, 20, 30]));

  console.log(this.alumne1.presentar());
  console.log(this.alumne1.haAprobat);

  console.log(this.alumne2.presentar());
  console.log(this.alumne2.haAprobat);
}

colleccio = new ColleccioJocs('Els meus videojocs');

provarColleccio(): void {
  this.colleccio.afegirJoc(this.joc1);
  this.colleccio.afegirJoc(this.joc2);

  console.log(this.colleccio.totalJocs);
  console.log(this.colleccio.buscarJoc(1));
}

alumne1 = new Alumne('Biel', 18, 'DAW', [7, 8, 6, 9]);

alumne2 = new Alumne('Dani', 19, 'SMX', [3, 4, 5, 2]);


}

