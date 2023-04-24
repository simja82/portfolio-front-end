import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-quotes-modal',
  templateUrl: './audiovisual-quotes-modal.component.html'
})
export class AudiovisualQuotesModalComponent implements OnInit {

  //Array Quotes Intro
  quotes_intro : any = [];

  //Array Quotes
  quotes : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.quotes_intro = data.quotes_intro;
      this.quotes = data.quotes;
      this.buttons = data.buttons;
    })
  }
  
}