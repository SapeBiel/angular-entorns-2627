export interface Producte{
id: number;
nom: string;
preu: number;   
estoc: number;
categoria: string;
descripcio ?: string;// el interrogant indica que aquest camp és opcional, no és obligatori posar-lo.

}