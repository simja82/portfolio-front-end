import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-experience-cv-modal',
  templateUrl: './experience-cv-modal.component.html'
})
export class ExperienceCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Experience CV
  experienceCV : any = [];

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
        this.experienceCV = data.experienceCV;
        this.buttons = data.buttons;
      })
    }

  }
  
