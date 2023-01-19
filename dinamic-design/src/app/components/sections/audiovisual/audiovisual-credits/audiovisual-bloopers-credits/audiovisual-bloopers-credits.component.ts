import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-bloopers-credits',
  templateUrl: './audiovisual-bloopers-credits.component.html'
})
export class AudiovisualBloopersCreditsComponent implements OnInit {

  //Array Bloopes Credits
  bloopersCredits : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.bloopersCredits = data.bloopersCredits;
    })
  }

}
 