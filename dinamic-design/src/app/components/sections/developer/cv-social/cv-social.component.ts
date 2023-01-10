import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-social',
  templateUrl: './cv-social.component.html'
})
export class CvSocialComponent implements OnInit {
  //Declaración de Array
  socialCV : any = [];

  //Variable del Componente
  title = "Redes";

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.socialCV = data.socialCV;
    })
  }

}


