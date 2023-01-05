import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-audiovisual-projects',
  templateUrl: './audiovisual-projects.component.html',
  styleUrls: ['./audiovisual-projects.component.css']
})
export class AudiovisualProjectsComponent implements OnInit {
  //Declaración de Array
  projects : any = [];
  samples : any = [];
  
  //Inyección de Service
  constructor (private audiovisualService:AudiovisualService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.projects = data.projects;
      this.samples = data.samples;
    })
  }
  
}
