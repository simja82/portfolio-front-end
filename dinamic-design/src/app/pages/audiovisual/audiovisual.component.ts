import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-audiovisual',
  templateUrl: './audiovisual.component.html',
  styleUrls: ['./audiovisual.component.css']
})
export class AudiovisualComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Audiovisual Intro | Point of View')
  }

  ngOnInit(): void { }

}
