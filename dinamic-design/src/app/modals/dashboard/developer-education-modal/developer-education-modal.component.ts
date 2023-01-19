import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-education-modal',
  templateUrl: './developer-education-modal.component.html'
})
export class DeveloperEducationModalComponent implements OnInit {

  //Array Studies
  studies : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.studies = data.studies;
      this.buttons = data.buttons;
    })
  }
  
}
