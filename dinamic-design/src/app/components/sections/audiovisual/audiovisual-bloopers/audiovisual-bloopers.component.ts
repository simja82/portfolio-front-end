import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-bloopers',
  templateUrl: './audiovisual-bloopers.component.html'
})
export class AudiovisualBloopersComponent implements OnInit {

  //Arrays Icon Bloopers
  icon_bloopers : any = [];

  //Arrays Line Bloopers
  line_bloopers : any = [];

  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.icon_bloopers = data.icon_bloopers;
      this.line_bloopers = data.line_bloopers;
    })
  }
  
}
