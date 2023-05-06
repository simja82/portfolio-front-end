import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/models/study';
import { StudyService } from 'src/app/services/study.service';
//import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-education',
  templateUrl: './developer-education.component.html'
})
export class DeveloperEducationComponent implements OnInit {

  //Array Studies
  //studies : any = [];
  studies : Study [] = [];

  //Array Sections
  //sections : any = [];

  //Inyección de Service
    constructor (private studyService:StudyService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.studyService.getStudies().subscribe(data => {
        //Información a mostrar
        this.studies = data;
        //this.sections = data.sections;
      })
    }

  }
  