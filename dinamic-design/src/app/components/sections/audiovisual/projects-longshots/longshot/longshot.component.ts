import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LongshotsService } from 'src/assets/services/contents/longshots.service';

@Component({
  selector: 'app-longshot',
  templateUrl: './longshot.component.html'
})
export class LongshotComponent implements OnInit {
  longshot: any = {};
  constructor (private title:Title, private activatedRoute: ActivatedRoute, private longshotsService: LongshotsService) 
    { 
      title.setTitle('Serie Detail | Point of View');
      this.activatedRoute.params.subscribe((params) => {
        this.longshot = this.longshotsService.getLongshot(params['id']);
      });
    }

  ngOnInit(): void { }

}