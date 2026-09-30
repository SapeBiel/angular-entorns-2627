/*Aquest fitxer conte la logica: propietats, metodes, getters...*/ 
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/productes';

@Component({
  selector: 'app-tarjeta',/*Es per usar-lo al HTML d'altres components, om una etiqueta HTML personalitazada */ 
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: String = 'Ordinador Gamer Pro';
  preu : number =1299;
  estoc : number= 5;


  producte : Producte = {
    id:1,
    nom:'Ordinador Gamer pro',
    preu: 1299,
    estoc: 5,
    categoria: 'Informatica'
  };

  get preuAmbIva(): number{
return this.producte.preu * 1.21;
}

get estatDisponible(): string {
  if(this.producte.estoc === 0) return 'Esgotat';
  if(this.producte.estoc <3) return 'Ultimes unitats';
  return 'Disponible'
}

}


/*
INTERPOBLACIO DE DADES
Permet connectar les dades dle TS A l'HTML
Permet incurstar expressions de TS dins de l'HTML, angulas avalua l'expressio i mostra el resusltat com a text

{{nomPropietat}} --> mostra el valor d'una propietat de la calassse
{{2 + 3}} -> mostra 5
{{text.toUpperCase()}} --> mostra el text amb majusucles
{{edat >= 18 ? 'Major d\'edat' : 'Menor\'edat'}} --> operador ternari

*/