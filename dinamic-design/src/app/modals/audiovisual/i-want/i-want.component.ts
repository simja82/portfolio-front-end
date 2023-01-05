import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-i-want',
  templateUrl: './i-want.component.html',
  styleUrls: ['./i-want.component.css']
})
export class IWantComponent implements OnInit {
  //Declaración de Array
  iwant : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.iwant = data.iwant;
      })
    }
  
  }
  
