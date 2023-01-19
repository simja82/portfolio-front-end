import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-technical-skills',
  templateUrl: './developer-technical-skills.component.html',
  styleUrls: ['./developer-technical-skills.component.css']
})
export class DeveloperTechnicalSkillsComponent implements OnInit {

  //Array Technicals
  technicals : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.technicals = data.technicals;
        this.sections = data.sections;
      })
    }

  }
  