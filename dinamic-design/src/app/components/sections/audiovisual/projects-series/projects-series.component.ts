import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-projects-series',
  templateUrl: './projects-series.component.html'
})
export class ProjectsSeriesComponent  implements OnInit {
  //Declaración de Array
  series : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.series = data.series;
      })
    }
  
  }
  
