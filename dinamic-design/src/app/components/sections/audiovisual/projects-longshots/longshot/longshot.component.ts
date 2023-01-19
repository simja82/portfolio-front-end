import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LongshotsService } from 'src/assets/services/contents/longshots.service';

@Component({
  selector: 'app-longshot',
  templateUrl: './longshot.component.html',
  styleUrls: ['./longshot.component.css']
})
export class LongshotComponent implements OnInit {

  //Dato de Longshot
  longshot: any = {};

  //Inyección de Title, Activated Route y Servicio de Longshot
  constructor (private title:Title, private activatedRoute: ActivatedRoute, private longshotsService: LongshotsService) 
    { 
      //Seteo de Title
      title.setTitle('Longshot Detail | Point of View');

      //Detalle de Longshot por id
      this.activatedRoute.params.subscribe((params) => {
        this.longshot = this.longshotsService.getLongshot(params['id']);
      });
    }

  ngOnInit(): void { }

}