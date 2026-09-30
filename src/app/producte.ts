//Primera classe
export class Producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    //metode normal
    toString() : string {
        return `${this.nom} - ${this.preu}€`;
    }

    //getters i setters
    PreuAmbIva() : number {
        return this.preu * 1.21;
    }

    descripcio() : string {
        return `${this.nom} - ${this.preu}€`;
    }

    Descompte() : number {
        return this.preu * 0.90;
    }

}