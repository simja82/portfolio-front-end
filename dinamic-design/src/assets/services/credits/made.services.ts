import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MadeService {
    made : any[] =
    [
        {
            id : 0,
            icon : "fa-brands fa-html5 fa-3x text-white",
            tool : "HTML",
        },
        {
            id : 1,
            icon : "fa-brands fa-bootstrap fa-3x text-white",
            tool : "Bootstrap",
        },
        {
            id : 2,
            icon : "fa-brands fa-java fa-3x text-white",
            tool : "Java",
        },
        {
            id : 3,
            icon : "fa-brands fa-css3-alt fa-3x text-white",
            tool : "CSS",
        },
        {
            id : 4,
            icon : "fa-brands fa-angular fa-3x text-white",
            tool : "Angular",
        },
        {
            id : 5,
            icon : "fa-solid fa-leaf fa-3x text-white",
            tool : "SpringBoot",
        },
        {
            id : 6,
            icon : "fa-solid fa-font-awesome fa-3x text-white",
            tool : "Fontawesome",
        },
        {
            id : 7,
            icon : "fa-solid fa-coins fa-3x text-white",
            tool : "Base de Datos",
        },
        {
            id : 8,
            icon : "fa-brands fa-github fa-3x text-white",
            tool : "GitHub",
        }
    ];

    constructor() {}

    getMade() {
      return this.made;
    }
  
}