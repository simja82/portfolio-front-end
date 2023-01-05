import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-five',
  templateUrl: './audiovisual-five.component.html'
})
export class AudiovisualFiveComponent implements OnInit {
  //Declaración de Array
  five : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.five = data.five;
    })
  }
  
}
