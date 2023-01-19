import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-soft-skills',
  templateUrl: './cv-soft-skills.component.html'
})
export class CvSoftSkillsComponent implements OnInit {

  //Array Softs CV
  softsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.softsCV = data.softsCV;
      })
    }

  }
  