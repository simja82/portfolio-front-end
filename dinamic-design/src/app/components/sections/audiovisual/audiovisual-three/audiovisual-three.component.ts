import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-three',
  templateUrl: './audiovisual-three.component.html'
})
export class AudiovisualThreeComponent implements OnInit {
  //Declaración de Array
  three : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.three = data.three;
    })
  }
  
}
