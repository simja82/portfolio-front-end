import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-bloopers',
  templateUrl: './audiovisual-bloopers.component.html'
})
export class AudiovisualBloopersComponent implements OnInit {

  //Arrays Icon Bloopers
  iconBloopers : any = [];

  //Arrays Line Bloopers
  lineBloopers : any = [];

  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.iconBloopers = data.iconBloopers;
      this.lineBloopers = data.lineBloopers;
    })
  }
  
}
