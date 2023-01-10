import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-technical-skills',
  templateUrl: './developer-technical-skills.component.html',
  styleUrls: ['./developer-technical-skills.component.css']
})
export class DeveloperTechnicalSkillsComponent implements OnInit {
  //Declaración de Array
  technicals : any = [];

  //Variable del Componente
  title = "Técnicas"
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.technicals = data.technicals;
      })
    }

  }
  