import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-technical-skills',
  templateUrl: './cv-technical-skills.component.html'
})
export class CvTechnicalSkillsComponent implements OnInit {

  //Array Technicals CV
  technicalsCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.technicalsCV = data.technicalsCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
  