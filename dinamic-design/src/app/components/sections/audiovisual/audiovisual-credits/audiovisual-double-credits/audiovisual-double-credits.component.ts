import { Component, OnInit } from '@angular/core';
import { DoublesService } from 'src/assets/services/credits/doubles.service';

@Component({
  selector: 'app-audiovisual-double-credits',
  templateUrl: './audiovisual-double-credits.component.html'
})
export class AudiovisualDoubleCreditsComponent implements OnInit {
  //Declaración de Array
  doubles : any = [];
  
  //Inyección de Service
    constructor (private doublesService:DoublesService) 
    { 
      this.doubles = doublesService.getDoubles();
    }

    ngOnInit(): void { }
  
  }
  

