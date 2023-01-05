import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-projects-intro',
  templateUrl: './projects-intro.component.html',
  styleUrls: ['./projects-intro.component.css']
})
export class ProjectsIntroComponent implements OnInit {
  //Declaración de Array
  projects : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.projects = data.projects;
      })
    }
  
  }
  