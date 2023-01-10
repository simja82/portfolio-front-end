import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-black-developer',
  templateUrl: './black-developer.component.html'
})
export class BlackDeveloperComponent implements OnInit {
  //Declaración de Array
  social : any = [];
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.social = data.social;
      })
    }
  
  }
  