import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';
import { LongshotsService } from 'src/assets/services/contents/longshots.service';

@Component({
  selector: 'app-projects-longshots',
  templateUrl: './projects-longshots.component.html'
})
export class ProjectsLongshotsComponent  implements OnInit {
  //Declaración de Array
  longshots : any = [];
  
  //Inyección de Service completo, Service de Series y Router para acceso a detalle
    constructor (private audiovisualService:AudiovisualService, longshotsService:LongshotsService, private router: Router) 
    { 
      this.longshots = longshotsService.getLongshots();
    }

    showLongshot(id: number) {
      this.router.navigate(['audiovisual/projects/longshots/longshot', id]);
    }

    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.longshots = data.longshots;
      })
    }
  
  }
  
