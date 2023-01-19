import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-one',
  templateUrl: './audiovisual-one.component.html'
})
export class AudiovisualOneComponent implements OnInit {

//Array Divisors
divisors : any = [];

//Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.divisors = data.divisors;
    })
  }

}
