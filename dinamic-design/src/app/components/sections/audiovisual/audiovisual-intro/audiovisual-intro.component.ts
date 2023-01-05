import { Component, OnInit} from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-intro',
  templateUrl: './audiovisual-intro.component.html',
  styleUrls: ['./audiovisual-intro.component.css']
})
export class AudiovisualIntroComponent implements OnInit {
//Declaración de Array
cover : any = [];

//Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.cover = data.cover;
    })
  }

}
