import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-info-cv-modal',
  templateUrl: './info-cv-modal.component.html'
})
export class InfoCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Profile CV
  profileCV : any = [];

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
        this.profileCV = data.profileCV;
        this.buttons = data.buttons;
      })
    }

  }
  