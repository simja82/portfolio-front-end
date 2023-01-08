import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-samples-intro',
  templateUrl: './samples-intro.component.html',
  styleUrls: ['./samples-intro.component.css']
})
export class SamplesIntroComponent implements OnInit {
  //Declaración de Array
  samples : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.samples = data.samples;
      })
    }
  
  }
  