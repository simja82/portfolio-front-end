import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-projects',
  templateUrl: './cv-projects.component.html'
})
export class CvProjectsComponent implements OnInit {

  //Array Projects CV
  projectsCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.projectsCV = data.projectsCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
