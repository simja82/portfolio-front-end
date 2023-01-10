import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-developer-contact',
  templateUrl: './developer-contact.component.html'
})
export class DeveloperContactComponent implements OnInit {
  //Declaración de Array
  contact : any = [];

  //Variable del Componente
  title = "Info para ponernos en contacto..."
  
  //Inyección de Service
    constructor (private developerService:DeveloperService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.developerService.getData().subscribe(data => {
        //Información a mostrar
        this.contact = data.contact;
      })
    }

  }
  

