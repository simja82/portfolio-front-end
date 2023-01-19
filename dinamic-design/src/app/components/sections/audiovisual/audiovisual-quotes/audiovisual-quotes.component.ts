import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-quotes',
  templateUrl: './audiovisual-quotes.component.html'
})
export class AudiovisualQuotesComponent implements OnInit {

  //Array Quotes Intro
  quotesIntro : any = [];

  //Array Quotes
  quotes : any = [];
  
  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.quotesIntro = data.quotesIntro;
      this.quotes = data.quotes;
    })
  }
  
}
