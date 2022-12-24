import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bloopers',
  templateUrl: './bloopers.component.html',
  styleUrls: ['./bloopers.component.css']
})
export class BloopersComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Bloopers | Point of View')
  }

  ngOnInit(): void { }

}
