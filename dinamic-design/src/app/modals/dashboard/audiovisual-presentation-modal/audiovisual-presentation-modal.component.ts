import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-presentation-modal',
  templateUrl: './audiovisual-presentation-modal.component.html'
})
export class AudiovisualPresentationModalComponent implements OnInit {
  
  //Array Audiovisual Presentation
  audiovisual_presentation : any = [];

  //Array Minibio
  minibio : any = [];

  //Array My Work
  mywork : any = [];

  //Array I Want
  iwant : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.audiovisual_presentation = data.audiovisual_presentation;
      this.minibio = data.minibio;
      this.mywork = data.mywork;
      this.iwant = data.iwant;
      this.buttons = data.buttons;
    })
  }

}
