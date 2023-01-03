import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html'
})
export class CVComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Developer CV | Point of View')
  }

  ngOnInit(): void { }

}
