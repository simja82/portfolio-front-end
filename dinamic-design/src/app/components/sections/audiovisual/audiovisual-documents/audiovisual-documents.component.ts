import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-documents',
  templateUrl: './audiovisual-documents.component.html'
})
export class AudiovisualDocumentsComponent implements OnInit {
  //Declaración de Array
  presentation : any = [];
  minibio : any = [];
  mywork : any = [];
  iwant : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.presentation = data.presentation;
        this.minibio = data.minibio;
        this.mywork = data.mywork;
        this.iwant = data.iwant;
      })
    }
  
  }
  