import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-one',
  templateUrl: './audiovisual-one.component.html'
})
export class AudiovisualOneComponent implements OnInit {
//Declaración de Array
one : any = [];

//Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.one = data.one;
    })
  }

}
