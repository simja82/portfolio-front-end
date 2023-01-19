import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-triple-credits',
  templateUrl: './audiovisual-triple-credits.component.html'
})
export class AudiovisualTripleCreditsComponent implements OnInit {

  //Array Triple Credits
  tripleCredits : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.tripleCredits = data.tripleCredits;
    })
  }

}
