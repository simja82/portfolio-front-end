import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-hobbies-modal',
  templateUrl: './developer-hobbies-modal.component.html'
})
export class DeveloperHobbiesModalComponent implements OnInit {

  //Array Hobbies
  hobbies : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.hobbies = data.hobbies;
      this.buttons = data.buttons;
    })
  }
  
}

