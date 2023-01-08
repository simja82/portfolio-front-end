import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OthersService } from 'src/assets/services/contents/others.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html'
})
export class OtherComponent implements OnInit {
  other: any = {};
  constructor (private title:Title, private activatedRoute: ActivatedRoute, private othersService: OthersService) 
    { 
      title.setTitle('Other Detail | Point of View');
      this.activatedRoute.params.subscribe((params) => {
        this.other = this.othersService.getOther(params['id']);
      });
    }

  ngOnInit(): void { }

}
