import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-references',
  templateUrl: './cv-references.component.html'
})
export class CvReferencesComponent implements OnInit {
  //Declaración de Array
  referencesCV : any = [];

  //Variable del Componente
  title = "Referencias";

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.referencesCV = data.referencesCV;
    })
  }

}


