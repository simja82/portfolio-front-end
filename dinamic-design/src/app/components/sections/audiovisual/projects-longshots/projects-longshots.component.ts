import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LongshotsService } from 'src/assets/services/contents/longshots.service';

@Component({
  selector: 'app-projects-longshots',
  templateUrl: './projects-longshots.component.html'
})
export class ProjectsLongshotsComponent  implements OnInit {

  //Array Longshots del Servicio Longshots
  longshots : any = [];
  
  //Inyección de Service de Longshots y Router para acceso a detalle
    constructor (private longshotsService:LongshotsService, private router: Router) 
    {
      //Información a mostrar
      this.longshots = longshotsService.getLongshots();
    }

    //Ruta a Detalle
    showLongshot(id: number) {
      this.router.navigate(['audiovisual/projects/longshots/longshot', id-1]);
    }

    ngOnInit(): void { }
  
  }
  