import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-education',
  templateUrl: './cv-education.component.html'
})
export class CvEducationComponent implements OnInit {

  //Array Education CV
  educationCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.educationCV = data.educationCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
  