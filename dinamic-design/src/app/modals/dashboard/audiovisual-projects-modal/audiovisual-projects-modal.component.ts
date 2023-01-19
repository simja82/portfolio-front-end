import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-projects-modal',
  templateUrl: './audiovisual-projects-modal.component.html'
})
export class AudiovisualProjectsModalComponent implements OnInit {

  //Array Projects Intro
  projectsIntro : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.projectsIntro = data.projectsIntro;
    })
  }
  
}

