import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-five',
  templateUrl: './audiovisual-five.component.html'
})
export class AudiovisualFiveComponent implements OnInit {

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
