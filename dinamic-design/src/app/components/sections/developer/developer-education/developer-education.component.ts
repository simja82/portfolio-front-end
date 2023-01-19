import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-education',
  templateUrl: './developer-education.component.html'
})
export class DeveloperEducationComponent implements OnInit {

  //Array Studies
  studies : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.studies = data.studies;
        this.sections = data.sections;
      })
    }

  }
  