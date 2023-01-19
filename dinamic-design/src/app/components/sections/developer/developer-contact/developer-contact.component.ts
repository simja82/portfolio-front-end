import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-contact',
  templateUrl: './developer-contact.component.html'
})
export class DeveloperContactComponent implements OnInit {

  //Array Contact
  contact : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.contact = data.contact;
        this.sections = data.sections;
      })
    }

  }
  