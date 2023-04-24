import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-documents',
  templateUrl: './audiovisual-documents.component.html'
})
export class AudiovisualDocumentsComponent implements OnInit {

  //Array Presentation
  audiovisual_presentation : any = [];

  //Array Minibio
  minibio : any = [];

  //Array My Work
  mywork : any = [];

  //Array I Want
  iwant : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.audiovisual_presentation = data.audiovisual_presentation;
        this.minibio = data.minibio;
        this.mywork = data.mywork;
        this.iwant = data.iwant;
      })
    }
  
  }
  