import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-hobbies',
  templateUrl: './developer-hobbies.component.html'
})
export class DeveloperHobbiesComponent implements OnInit {
  //Declaración de Array
  hobbies : any = [];

  //Variable del Componente
  title = "Cosas que me gustan..."
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.hobbies = data.hobbies;
      })
    }

  }
  
