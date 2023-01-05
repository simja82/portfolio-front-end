import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-feedback',
  templateUrl: './audiovisual-feedback.component.html'
})
export class AudiovisualFeedbackComponent implements OnInit {
  //Declaración de Array
  feedback : any = [];
  saying : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.feedback = data.feedback;
      this.saying = data.saying;
    })
  }
  
}
