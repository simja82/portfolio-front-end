import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-experience',
  templateUrl: './cv-experience.component.html'
})
export class CvExperienceComponent implements OnInit {

  //Array Experiences CV
  experienceCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.experienceCV = data.experienceCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
