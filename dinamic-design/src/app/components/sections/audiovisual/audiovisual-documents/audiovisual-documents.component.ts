import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-documents',
  templateUrl: './audiovisual-documents.component.html'
})
export class AudiovisualDocumentsComponent implements OnInit {

  //Array Presentation
  audiovisualPresentation : any = [];

  //Array Minibio
  minibio : any = [];

  //Array My Work
  myWork : any = [];

  //Array I Want
  iWant : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.audiovisualPresentation = data.audiovisualPresentation;
        this.minibio = data.minibio;
        this.myWork = data.myWork;
        this.iWant = data.iWant;
      })
    }
  
  }
  