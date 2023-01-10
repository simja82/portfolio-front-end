import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-languages',
  templateUrl: './cv-languages.component.html'
})
export class CvLanguagesComponent implements OnInit {
  //Declaración de Array
  languagesCV : any = [];

  //Variable del Componente
  title = "Idiomas";

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.languagesCV = data.languagesCV;
    })
  }

}
