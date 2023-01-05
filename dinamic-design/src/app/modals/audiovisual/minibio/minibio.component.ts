import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-minibio',
  templateUrl: './minibio.component.html',
  styleUrls: ['./minibio.component.css']
})
export class MinibioComponent implements OnInit {
  //Declaración de Array
  minibio : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.minibio = data.minibio;
      })
    }
  
  }
  