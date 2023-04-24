import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-single-credits',
  templateUrl: './audiovisual-single-credits.component.html'
})
export class AudiovisualSingleCreditsComponent implements OnInit {

  //Array Single Credits
  single_credits : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.single_credits = data.single_credits;
    })
  }

}
