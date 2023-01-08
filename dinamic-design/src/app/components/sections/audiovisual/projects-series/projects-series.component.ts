import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';
import { SeriesService } from 'src/assets/services/contents/series.service';

@Component({
  selector: 'app-projects-series',
  templateUrl: './projects-series.component.html'
})
export class ProjectsSeriesComponent  implements OnInit {
  //Declaración de Array
  series : any = [];
  
  //Inyección de Service completo, Service de Series y Router para acceso a detalle
    constructor (private audiovisualService:AudiovisualService, seriesService:SeriesService, private router: Router) 
    { 
      this.series = seriesService.getSeries();
    }

    showSerie(id: number) {
      this.router.navigate(['audiovisual/projects/series/serie', id]);
    }

    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.series = data.series;
      })
    }
  
  }
  
