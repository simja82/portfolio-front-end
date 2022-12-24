import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Audiovisual Links | Point of View')
  }

  ngOnInit(): void { }

}
