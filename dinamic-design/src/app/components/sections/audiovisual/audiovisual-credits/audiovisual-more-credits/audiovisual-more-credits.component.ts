import { Component, OnInit } from '@angular/core';
import { MoreService } from 'src/assets/services/credits/more.service';

@Component({
  selector: 'app-audiovisual-more-credits',
  templateUrl: './audiovisual-more-credits.component.html'
})
export class AudiovisualMoreCreditsComponent implements OnInit {
  //Declaración de Array
  more : any = [];

  //Variable de Título
  title = "Y muchísimas"
  
  //Inyección de Service
    constructor (private moreService:MoreService) 
    { 
      this.more = moreService.getMore();
    }

    ngOnInit(): void { }
  
  }
  
