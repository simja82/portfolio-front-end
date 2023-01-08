import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/assets/services/contents/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html'
})
export class SerieComponent implements OnInit {
  serie: any = {};
  constructor (private title:Title, private activatedRoute: ActivatedRoute, private seriesService: SeriesService) 
    { 
      title.setTitle('Serie Detail | Point of View');
      this.activatedRoute.params.subscribe((params) => {
        this.serie = this.seriesService.getSerie(params['id']);
      });
    }

  ngOnInit(): void { }

}