import { Component, OnInit } from '@angular/core';
import { TriplesService } from 'src/assets/services/credits/triples.services';

@Component({
  selector: 'app-audiovisual-triple-credits',
  templateUrl: './audiovisual-triple-credits.component.html'
})
export class AudiovisualTripleCreditsComponent implements OnInit {
  //Declaración de Array
  triples : any = [];
  
  //Inyección de Service
    constructor (private triplesService:TriplesService) 
    { 
      this.triples = triplesService.getTriples();
    }

    ngOnInit(): void { }
  
  }
  

