import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-contact',
  templateUrl: './cv-contact.component.html'
})
export class CvContactComponent implements OnInit {

  //Array Contact CV
  contactCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.contactCV = data.contactCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
  