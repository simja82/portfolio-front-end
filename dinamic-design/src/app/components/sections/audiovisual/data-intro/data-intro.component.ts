import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-data-intro',
  templateUrl: './data-intro.component.html',
  styleUrls: ['./data-intro.component.css']
})
export class DataIntroComponent implements OnInit {
  //Declaración de Array
  data : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.data = data.data;
      })
    }
  
  }
  