import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-bloopers-modal',
  templateUrl: './bloopers-modal.component.html'
})
export class BloopersModalComponent implements OnInit {

  //Array Bloopers
  bloopers : any = [];

  //Arrays Icon Bloopers
  iconBloopers : any = [];

  //Arrays Line Bloopers
  lineBloopers : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.bloopers = data.bloopers;
      this.iconBloopers = data.iconBloopers;
      this.lineBloopers = data.lineBloopers;
      this.buttons = data.buttons;
    })
  }
  
}
