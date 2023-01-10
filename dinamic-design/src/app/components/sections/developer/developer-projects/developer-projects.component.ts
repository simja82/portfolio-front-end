import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-projects',
  templateUrl: './developer-projects.component.html'
})
export class DeveloperProjectsComponent implements OnInit {
  //Declaración de Array
  projects : any = [];

  //Variable del Componente
  title = "Proyectos que tengo..."
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.projects = data.projects;
      })
    }

  }
  