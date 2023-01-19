import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-education-cv-modal',
  templateUrl: './education-cv-modal.component.html'
})
export class EducationCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Education CV
  educationCV : any = [];

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
        this.educationCV = data.educationCV;
        this.buttons = data.buttons;
      })
    }

  }
  