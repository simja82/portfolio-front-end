import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-music-credits',
  templateUrl: './audiovisual-music-credits.component.html'
})
export class AudiovisualMusicCreditsComponent implements OnInit {

  //Array Music
  music : any = [];

  //Inyección de Service
  constructor (private povService: POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.music = data.music;
    })
  }

}
 