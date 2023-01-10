import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-references',
  templateUrl: './developer-references.component.html'
})
export class DeveloperReferencesComponent implements OnInit {
  //Declaración de Array
  references : any = [];

  //Variable del Componente
  title = "Dicen de mí..."
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.references = data.references;
      })
    }

  }
  

