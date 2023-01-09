import { Component, OnInit } from '@angular/core';
import { MadeService } from 'src/assets/services/credits/made.services';

@Component({
  selector: 'app-audiovisual-made-credits',
  templateUrl: './audiovisual-made-credits.component.html'
})
export class AudiovisualMadeCreditsComponent implements OnInit {
  //Declaración de Array
  made : any = [];

  //Variable de Título
  title = "Hecho con"
  
  //Inyección de Service
    constructor (private madeService:MadeService) 
    { 
      this.made = madeService.getMade();
    }

    ngOnInit(): void { }
  
  }
  
