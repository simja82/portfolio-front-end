import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThanksService {
    thanks : any[] =
    [
        {
            id : 0,
            to : "A mi mamá, María",
            because : "Por haberme dado todo lo que estuvo a su alcance y más, muchísimo más.",
        },
        {
            id : 1,
            to : "A mis hermosos hijos",
            because : "Porque sin las horas, días y semanas que me tuvieron con poca disponibilidad esto no podría haberse hecho.",
        },
        {
            id : 2,
            to : "A mi Tío Rodolfo Q.E.P.D.",
            because : "Por haberme mostrado cuánto vale el educar a los hijos en valores.",
        },
        {
            id : 3,
            to : "A la Bibliotecaria Cora Céspedes Q.E.P.D.",
            because : "Por haberme enseñado que a los niños no se los debe condicionar al momento de elegir cómo dejar volar su imaginación con los libros.",
        },
    ];

    constructor() {}

    getThanks() {
      return this.thanks;
    }
  
}