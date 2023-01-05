import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-profile',
  templateUrl: './audiovisual-profile.component.html'
})
export class AudiovisualProfileComponent implements OnInit {
//Declaración de Array
profile : any = [];

//Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.profile = data.profile;
    })
  }

}
