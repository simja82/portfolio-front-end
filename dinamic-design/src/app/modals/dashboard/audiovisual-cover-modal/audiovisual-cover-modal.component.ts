import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-cover-modal',
  templateUrl: './audiovisual-cover-modal.component.html'
})
export class AudiovisualCoverModalComponent implements OnInit {
  
  //Array Cover
  cover : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.cover = data.cover;
      this.buttons = data.buttons;
    })
  }

}
