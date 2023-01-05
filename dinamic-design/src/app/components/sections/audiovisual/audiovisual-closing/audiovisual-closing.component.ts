import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-closing',
  templateUrl: './audiovisual-closing.component.html'
})
export class AudiovisualClosingComponent implements OnInit {
  //Declaración de Array
  closing : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.closing = data.closing;
    })
  }
  
}
