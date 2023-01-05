import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-projects-longshots',
  templateUrl: './projects-longshots.component.html'
})
export class ProjectsLongshotsComponent  implements OnInit {
  //Declaración de Array
  longshots : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.longshots = data.longshots;
      })
    }
  
  }
  