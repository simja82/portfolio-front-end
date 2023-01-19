import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-made-credits',
  templateUrl: './audiovisual-made-credits.component.html'
})
export class AudiovisualMadeCreditsComponent implements OnInit {

  //Array Made
  made : any = [];

  //Array Credits
  credits : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.made = data.made;
      this.credits = data.credits;
    })
  }

}
 