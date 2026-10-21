// model idades de prova per la sessio 7 PROPERTY BINDINGS
export interface ProducteLab{
    id:number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    imatgeUrl: string;
}

export const PRODUCTES_LAB: ProducteLab[] = [
    {id:1,
        nom: 'Portatil ProBook 12',
        preu: 899,
        estoc: 3,
        categoria: 'Informatica',
        imatgeUrl: 'https://fastly.picsum.photos/id/356/300/180.jpg?hmac=1eqMzkylX26LYmjnHSHaWZqGlxua48lUJ1rAxYQEoEg'

    },
    {
        id:2,
        nom: 'Ratoli sense fil',
        preu: 24.99,
        estoc: 13,
        categoria: 'Periferics',
        imatgeUrl: 'https://fastly.picsum.photos/id/889/300/180.jpg?hmac=hBeuapp9BXtTCg50BglXUWptNvRhBt5JPXMPsyqoRH4'
    },
    {
        id:3,
        nom: 'Pantalles',
        preu: 199,
        estoc: 5,
        categoria: 'Informatica',
        imatgeUrl: 'https://fastly.picsum.photos/id/356/300/180.jpg?hmac=1eqMzkylX26LYmjnHSHaWZqGlxua48lUJ1rAxYQEoEg'
    },
        {
        id:4,
        nom: 'Auriculars',
        preu: 59,
        estoc: 0,
        categoria: 'Periferics',
        imatgeUrl: 'https://fastly.picsum.photos/id/356/300/180.jpg?hmac=1eqMzkylX26LYmjnHSHaWZqGlxua48lUJ1rAxYQEoEg'
    },{
            id:5,
        nom: 'Altaveu',
        preu: 149,
        estoc: 5,
        categoria: 'Informatica',
        imatgeUrl: ''
        }
]