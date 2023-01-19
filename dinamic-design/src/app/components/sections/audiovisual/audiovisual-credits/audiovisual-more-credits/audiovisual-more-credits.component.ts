import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-more-credits',
  templateUrl: './audiovisual-more-credits.component.html'
})
export class AudiovisualMoreCreditsComponent implements OnInit {

  //Array More
  more : any = [];

  //Array Credits
  credits : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.more = data.more;
      this.credits = data.credits;
    })
  }

}
