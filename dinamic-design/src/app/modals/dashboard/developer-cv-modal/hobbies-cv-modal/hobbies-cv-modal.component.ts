import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-hobbies-cv-modal',
  templateUrl: './hobbies-cv-modal.component.html'
})
export class HobbiesCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Hobbies CV
  hobbiesCV : any = [];

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
        this.hobbiesCV = data.hobbiesCV;
        this.buttons = data.buttons;
      })
    }

  }
  