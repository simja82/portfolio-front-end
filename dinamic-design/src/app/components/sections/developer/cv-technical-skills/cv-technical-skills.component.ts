import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-technical-skills',
  templateUrl: './cv-technical-skills.component.html'
})
export class CvTechnicalSkillsComponent implements OnInit {
  //Declaración de Array
  technicalCV : any = [];

  //Variable del Componente
  title = "Habilidades";

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.technicalCV = data.technicalCV;
    })
  }

}

