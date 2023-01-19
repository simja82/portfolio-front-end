import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-projects',
  templateUrl: './developer-projects.component.html'
})
export class DeveloperProjectsComponent implements OnInit {

  //Array Developer Projects
  developerProjects : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.developerProjects = data.developerProjects;
        this.sections = data.sections;
      })
    }

  }
  