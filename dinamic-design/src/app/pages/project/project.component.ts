import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor (private title:Title) {
    title.setTitle('Audiovisual Project | Point of View')
  }

  ngOnInit(): void { }

}
