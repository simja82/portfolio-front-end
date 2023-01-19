import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-thanks-credits',
  templateUrl: './audiovisual-thanks-credits.component.html'
})
export class AudiovisualThanksCreditsComponent implements OnInit {

  //Array Thanks
  thanks : any = [];

  //Array Credits
  credits : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.thanks = data.thanks;
      this.credits = data.credits;
    })
  }

}
