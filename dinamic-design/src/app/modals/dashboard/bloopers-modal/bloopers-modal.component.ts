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
  icon_bloopers : any = [];

  //Arrays Line Bloopers
  line_bloopers : any = [];

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
      this.icon_bloopers = data.icon_bloopers;
      this.line_bloopers = data.line_bloopers;
      this.buttons = data.buttons;
    })
  }
  
}
