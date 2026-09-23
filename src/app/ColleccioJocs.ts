import { Joc } from './interfaces/joc';

export class ColleccioJocs {

  // Propietats tipades
  nom: string;
  jocs: Joc[];

  // Constructor
  constructor(nom: string) {
    this.nom = nom;
    this.jocs = [];
  }

  // Mètode per afegir un joc
  afegirJoc(joc: Joc): void {
    this.jocs.push(joc);
  }

  // Mètode per buscar un joc per ID
  buscarJoc(id: number): Joc | undefined {
    return this.jocs.find(joc => joc.id === id);
  }

  // Getter per obtenir el nombre de jocs
  get totalJocs(): number {
    return this.jocs.length;
  }
  
}