import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-links-modal',
  templateUrl: './audiovisual-links-modal.component.html',
  styleUrls: ['./audiovisual-links-modal.component.css']
})
export class AudiovisualLinksModalComponent implements OnInit {

  //Array Phrases
  phrases : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.phrases = data.phrases;
      this.buttons = data.buttons;
    })
  }
  
}
