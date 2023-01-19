import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-soft-skills',
  templateUrl: './developer-soft-skills.component.html'
})
export class DeveloperSoftSkillsComponent implements OnInit {

  //Array Softs
  softs : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.softs = data.softs;
        this.sections = data.sections;
      })
    }

  }
  