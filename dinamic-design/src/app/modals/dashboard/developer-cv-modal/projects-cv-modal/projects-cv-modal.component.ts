import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-projects-cv-modal',
  templateUrl: './projects-cv-modal.component.html'
})
export class ProjectsCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Projects CV
  projectsCV : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.sectionsCV = data.sectionsCV;
        this.projectsCV = data.projectsCV;
        this.buttons = data.buttons;
      })
    }

  }
  
