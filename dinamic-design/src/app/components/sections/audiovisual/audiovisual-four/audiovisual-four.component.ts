import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-four',
  templateUrl: './audiovisual-four.component.html'
})
export class AudiovisualFourComponent implements OnInit {
  //Declaración de Array
  four : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.four = data.four;
    })
  }
  
}
