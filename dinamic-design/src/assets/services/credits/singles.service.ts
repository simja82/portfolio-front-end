import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SinglesService {
    singles : any[] =
    [
        {
            id : 0,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        },
        {
            id : 1,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        }
    ];

    constructor() {}

    getSingles() {
      return this.singles;
    }
  
}