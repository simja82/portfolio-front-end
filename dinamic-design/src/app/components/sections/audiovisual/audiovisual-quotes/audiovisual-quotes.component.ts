import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-quotes',
  templateUrl: './audiovisual-quotes.component.html'
})
export class AudiovisualQuotesComponent implements OnInit {
  //Declaración de Array
  quotes : any = [];
  phrases : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.quotes = data.quotes;
      this.phrases = data.phrases;
    })
  }
  
}
