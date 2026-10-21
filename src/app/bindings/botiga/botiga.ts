import { Component } from '@angular/core';
import { ProducteLab, PRODUCTES_LAB } from '../producte-lab';
@Component({
  selector: 'app-botiga',
  imports: [],
  templateUrl: './botiga.html',
  styleUrl: './botiga.css',
})
export class Botiga {
title='Botiga de bindings';
productes : ProducteLab[] = PRODUCTES_LAB;

  teEstoc(p:ProducteLab): boolean{
    return p.estoc> 0;
  }

  classesFitxa(p: ProducteLab): string{
    const classses = ['fitxa'];
    if(p.preu > 500) classses.push('destacat');
    if(p.preu<50) classses.push('oferta');
    if(p.estoc === 0) classses.push ('esgotat');
    return classses.join(' ');
  }
  imatgeSegura(p: ProducteLab) : string{
    return p.imatgeUrl || 'SENSE IMATGE';
  }

  urlFitxa (p:ProducteLab) : string{
    return 'https://botiga.cat/producte/${p.id}';
  }



}

