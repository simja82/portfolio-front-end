import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-soft-skills',
  templateUrl: './cv-soft-skills.component.html'
})
export class CvSoftSkillsComponent implements OnInit {
  //Declaración de Array
  softsCV : any = [];

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.softsCV = data.softsCV;
    })
  }

}


