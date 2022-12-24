import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Audiovisual Samples | Point of View')
  }

  ngOnInit(): void { }

}
