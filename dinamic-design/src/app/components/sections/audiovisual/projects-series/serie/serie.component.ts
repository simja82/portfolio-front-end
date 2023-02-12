import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/assets/services/contents/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  //Datos de Serie
  serie: any = {};

  //Inyección de Title, Activated Route y Servicio de Serie
  constructor (private title:Title, private activatedRoute: ActivatedRoute, private seriesService: SeriesService) 
    { 
      //Seteo de Title
      title.setTitle('Serie Detail | Point of View');

      //Detalle de Serie por id
      this.activatedRoute.params.subscribe((params) => {
        this.serie = this.seriesService.getSerie(params['id']);
      });
    }

  ngOnInit(): void {
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000"; 
  }

}
