import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-projects',
  templateUrl: './cv-projects.component.html'
})
export class CvProjectsComponent implements OnInit {
  //Declaración de Array
  projectsCV : any = [];

  //Variable del Componente
  title = "Proyectos";

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.projectsCV = data.projectsCV;
    })
  }

}

