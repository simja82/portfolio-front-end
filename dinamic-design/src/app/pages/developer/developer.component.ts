import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Developer Intro | Point of View')
  }

  ngOnInit(): void { }

}
