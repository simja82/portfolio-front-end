import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-projects',
  templateUrl: './audiovisual-projects.component.html',
  styleUrls: ['./audiovisual-projects.component.css']
})
export class AudiovisualProjectsComponent implements OnInit {

  //Array Projects Intro
  projects_intro : any = [];
  
  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.projects_intro = data.projects_intro;
    })
  }
  
}
