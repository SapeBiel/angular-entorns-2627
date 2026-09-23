export class Alumne {

  // Propietats
  nom: string;
  edat: number;
  cicle: string;
  notes: number[];

  // Constructor
  constructor(nom: string, edat: number, cicle: string, notes: number[]) {
    this.nom = nom;
    this.edat = edat;
    this.cicle = cicle;
    this.notes = notes;
  }

  // Mètode per presentar l'alumne
  presentar(): string {
    return `Soc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}`;
  }

  // Getter per calcular la mitjana de les notes
  get mitjanaNotes(): number {
    if (this.notes.length === 0) {
      return 0;
    }

    let suma = 0;

    for (let nota of this.notes) {
      suma += nota;
    }

    return suma / this.notes.length;
  }

  // Getter per comprovar si ha aprovat
  get haAprobat(): boolean {
    return this.mitjanaNotes >= 5;
  }

}