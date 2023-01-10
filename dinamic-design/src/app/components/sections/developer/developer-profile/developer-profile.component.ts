import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html'
})
export class DeveloperProfileComponent implements OnInit {
  //Declaración de Array
  profile : any = [];
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.profile = data.profile;
      })
    }

  }
  