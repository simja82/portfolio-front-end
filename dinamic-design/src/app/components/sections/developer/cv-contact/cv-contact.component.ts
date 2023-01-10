import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-contact',
  templateUrl: './cv-contact.component.html'
})
export class CvContactComponent implements OnInit {
  //Declaración de Array
  contactCV : any = [];

  //Variable del Componente
  title = "Contacto"

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.contactCV = data.contactCV;
    })
  }

}

