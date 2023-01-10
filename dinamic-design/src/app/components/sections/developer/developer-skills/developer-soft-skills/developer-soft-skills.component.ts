import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-soft-skills',
  templateUrl: './developer-soft-skills.component.html'
})
export class DeveloperSoftSkillsComponent implements OnInit {
  //Declaración de Array
  softs : any = [];

  //Variable del Componente
  title = "y Blandas"
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.softs = data.softs;
      })
    }

  }
  
