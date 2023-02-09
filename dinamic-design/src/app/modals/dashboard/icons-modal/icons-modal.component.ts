import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-icons-modal',
  templateUrl: './icons-modal.component.html'
})
export class IconsModalComponent implements OnInit {

  //Array Icons
  icons : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.icons = data.icons;
      this.buttons = data.buttons;
    })
  }

}
