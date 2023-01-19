import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-experience',
  templateUrl: './developer-experience.component.html'
})
export class DeveloperExperienceComponent implements OnInit {

  //Array Experiences
  experiences : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.experiences = data.experiences;
        this.sections = data.sections;
      })
    }

  }
  