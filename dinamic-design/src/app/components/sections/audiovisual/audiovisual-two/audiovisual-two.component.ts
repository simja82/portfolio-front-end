import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-two',
  templateUrl: './audiovisual-two.component.html'
})
export class AudiovisualTwoComponent implements OnInit {
  //Declaración de Array
  two : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.two = data.two;
    })
  }
  
}
