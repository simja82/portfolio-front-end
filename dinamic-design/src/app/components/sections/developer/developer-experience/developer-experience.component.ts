import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-experience',
  templateUrl: './developer-experience.component.html'
})
export class DeveloperExperienceComponent implements OnInit {
  //Declaración de Array
  experiences : any = [];

  //Variable del Componente
  title = "Trabajos que hice y hago..."
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.experiences = data.experiences;
      })
    }

  }
  