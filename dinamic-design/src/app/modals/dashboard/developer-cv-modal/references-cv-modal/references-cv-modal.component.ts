import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-references-cv-modal',
  templateUrl: './references-cv-modal.component.html'
})
export class ReferencesCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array References CV
  referencesCV : any = [];

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
        this.referencesCV = data.referencesCV;
        this.buttons = data.buttons;
      })
    }

  }
  