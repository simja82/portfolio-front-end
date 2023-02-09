import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-helpers-modal',
  templateUrl: './helpers-modal.component.html'
})
export class HelpersModalComponent implements OnInit {

  //Array Helpers
  helpers : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.helpers = data.helpers;
      this.buttons = data.buttons;
    })
  }

}
