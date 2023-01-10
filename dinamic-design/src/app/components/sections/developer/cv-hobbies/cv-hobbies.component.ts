import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-hobbies',
  templateUrl: './cv-hobbies.component.html'
})
export class CvHobbiesComponent implements OnInit {
  //Declaración de Array
  hobbiesCV : any = [];

  //Variable del Componente
  title = "Hobbies";

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.hobbiesCV = data.hobbiesCV;
    })
  }

}

