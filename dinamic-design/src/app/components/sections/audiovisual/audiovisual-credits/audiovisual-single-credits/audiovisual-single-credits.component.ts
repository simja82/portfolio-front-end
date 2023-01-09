import { Component, OnInit } from '@angular/core';
import { SinglesService } from 'src/assets/services/credits/singles.service';

@Component({
  selector: 'app-audiovisual-single-credits',
  templateUrl: './audiovisual-single-credits.component.html'
})
export class AudiovisualSingleCreditsComponent implements OnInit {
  //Declaración de Array
  singles : any = [];
  
  //Inyección de Service
    constructor (private singlesService:SinglesService) 
    { 
      this.singles = singlesService.getSingles();
    }

    ngOnInit(): void { }
  
  }
  
