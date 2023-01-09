import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoreService {
    more : any[] =
    [
        {
            id : 0,
            icon : "fa-solid fa-comments fa-3x text-white",
            thing : "Opiniones",
        },
        {
            id : 1,
            icon : "fa-solid fa-book fa-3x text-white",
            thing : "Lecturas",
        },
        {
            id : 2,
            icon : "fa-solid fa-clock fa-3x text-white",
            thing : "Horas",
        }
    ];

    constructor() {}

    getMore() {
      return this.more;
    }
  
}