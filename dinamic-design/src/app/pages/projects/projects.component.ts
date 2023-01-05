import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor (private title:Title) {
    title.setTitle('Audiovisual Projects | Point of View')
  }

  ngOnInit(): void { }

}