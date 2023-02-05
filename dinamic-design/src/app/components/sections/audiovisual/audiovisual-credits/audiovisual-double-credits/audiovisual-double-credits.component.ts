import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-double-credits',
  templateUrl: './audiovisual-double-credits.component.html'
})
export class AudiovisualDoubleCreditsComponent implements OnInit {

  //Array Double Credits
  doubleCredits : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.doubleCredits = data.doubleCredits;
    })
  }

}
