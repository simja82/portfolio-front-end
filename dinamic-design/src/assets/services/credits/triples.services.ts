import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TriplesService {
    triples : any[] =
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
        },
        {
            id : 2,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        },
        {
            id : 3,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        },
        {
            id : 4,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        },
        {
            id : 5,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        },
        {
            id : 6,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        },
        {
            id : 7,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        },
        {
            id : 8,
            feedback : "Some quick example text to build on the card title.",
            name : "Full Name",
        }
    ];

    constructor() {}

    getTriples() {
      return this.triples;
    }
  
}