import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-contact-cv-modal',
  templateUrl: './contact-cv-modal.component.html'
})
export class ContactCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Contact CV
  contactCV : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.sectionsCV = data.sectionsCV;
        this.contactCV = data.contactCV;
        this.buttons = data.buttons;
      })
    }

  }
  