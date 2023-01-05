import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-black-audiovisual',
  templateUrl: './black-audiovisual.component.html'
})
export class BlackAudiovisualComponent implements OnInit {
  //Declaración de Array
  social : any = [];
  
  //Inyección de Service
      constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.social = data.social;
      })
    }
  
  }
  