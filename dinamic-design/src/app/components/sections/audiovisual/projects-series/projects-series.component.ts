import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/assets/services/contents/series.service';

@Component({
  selector: 'app-projects-series',
  templateUrl: './projects-series.component.html'
})
export class ProjectsSeriesComponent implements OnInit {

  //Array Series del Servicio Series
  series: any [] = [];
  
    //Inyección de Service de Series y Router para acceso a detalle
    constructor (private seriesService:SeriesService, private router: Router) 
    { 
      //Información a mostrar
      this.series = seriesService.getSeries(); 
    }

    //Ruta a Detalle
    showSerie(id: number) {
      this.router.navigate(['audiovisual/projects/series/serie', id-1]);
    }

    ngOnInit(): void { }
  
  }
  