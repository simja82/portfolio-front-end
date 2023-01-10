import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-education',
  templateUrl: './developer-education.component.html'
})
export class DeveloperEducationComponent implements OnInit {
  //Declaración de Array
  studies : any = [];

  //Variable del Componente
  title = "Estudié y lo sigo haciendo...";
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.studies = data.studies;
      })
    }

  }
  