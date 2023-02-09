import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-forms-modal',
  templateUrl: './forms-modal.component.html'
})
export class FormsModalComponent implements OnInit {

  //Array Forms
  forms : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.forms = data.forms;
      this.buttons = data.buttons;
    })
  }

}
