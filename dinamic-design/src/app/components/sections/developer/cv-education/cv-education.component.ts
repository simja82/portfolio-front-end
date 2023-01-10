import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-education',
  templateUrl: './cv-education.component.html'
})
export class CvEducationComponent implements OnInit {
  //Declaración de Array
  educationCV : any = [];

  //Variable del Componente
  title = "Educación";

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.educationCV = data.educationCV;
    })
  }

}

