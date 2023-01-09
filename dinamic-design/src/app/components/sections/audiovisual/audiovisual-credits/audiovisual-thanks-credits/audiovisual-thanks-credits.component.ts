import { Component, OnInit } from '@angular/core';
import { ThanksService } from 'src/assets/services/credits/thanks.service';

@Component({
  selector: 'app-audiovisual-thanks-credits',
  templateUrl: './audiovisual-thanks-credits.component.html'
})
export class AudiovisualThanksCreditsComponent implements OnInit {
  //Declaración de Array
  thanks : any = [];

  //Variable de Título
  title = "Agradecimientos"
  
  //Inyección de Service
    constructor (private thanksService:ThanksService) 
    { 
      this.thanks = thanksService.getThanks();
    }

    ngOnInit(): void { }
  
  }
  
 