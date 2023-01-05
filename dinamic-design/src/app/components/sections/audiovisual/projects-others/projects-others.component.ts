import { Component, OnInit } from '@angular/core';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-projects-others',
  templateUrl: './projects-others.component.html'
})
export class ProjectsOthersComponent  implements OnInit {
  //Declaración de Array
  others : any = [];
  
  //Inyección de Service
    constructor (private audiovisualService:AudiovisualService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.others = data.others;
      })
    }
  
  }
  