import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-intro',
  templateUrl: './developer-intro.component.html'
})
export class DeveloperIntroComponent implements OnInit {
  //Declaración de Array
  intro : any = [];
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.intro = data.intro;
      })
    }
  
  }
  