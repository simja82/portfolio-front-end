import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Credits | Point of View')
  }

  ngOnInit(): void { }

}
