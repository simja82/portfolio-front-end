import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Audiovisual Projects | Point of View');
  }

  ngOnInit(): void {
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000";
  }

  ngOnDestroy(): void { }

}