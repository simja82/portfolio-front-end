import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-languages',
  templateUrl: './developer-languages.component.html'
})
export class DeveloperLanguagesComponent implements OnInit {
  //Declaración de Array
  languages : any = [];

  //Variable del Componente
  title = "Idiomas que más domino..."
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.languages = data.languages;
      })
    }

  }
  

