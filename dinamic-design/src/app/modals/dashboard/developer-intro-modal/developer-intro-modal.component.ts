import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-intro-modal',
  templateUrl: './developer-intro-modal.component.html'
})
export class DeveloperIntroModalComponent implements OnInit {

  //Array Intro
  intro : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.intro = data.intro;
      this.buttons = data.buttons;
    })
  }
  
}
