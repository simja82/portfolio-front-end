import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-experience',
  templateUrl: './cv-experience.component.html'
})
export class CvExperienceComponent implements OnInit {
  //Declaración de Array
  experiencesCV : any = [];

  //Variable del Componente
  title = "Experiencia";
  
  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.experiencesCV = data.experiencesCV;
    })
  }

}

