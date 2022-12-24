import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Audiovisual Data | Point of View')
  }

  ngOnInit(): void { }

}
