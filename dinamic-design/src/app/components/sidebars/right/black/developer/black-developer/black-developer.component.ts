import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-black-developer',
  templateUrl: './black-developer.component.html'
})
export class BlackDeveloperComponent implements OnInit {

  //Array Social Developer
  social_developer : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.social_developer = data.social_developer;
      })
    }
  
  }
  