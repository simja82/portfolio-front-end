import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-closing-modal',
  templateUrl: './audiovisual-closing-modal.component.html'
})
export class AudiovisualClosingModalComponent implements OnInit {

  //Array Closing
  closing : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.closing = data.closing;
      this.buttons = data.buttons;
    })
  }
  
}
