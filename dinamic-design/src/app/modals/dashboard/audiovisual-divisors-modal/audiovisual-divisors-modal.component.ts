import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-divisors-modal',
  templateUrl: './audiovisual-divisors-modal.component.html'
})
export class AudiovisualDivisorsModalComponent implements OnInit {
  
  //Array Divisors
  divisors : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.divisors = data.divisors;
      this.buttons = data.buttons;
    })
  }

}

