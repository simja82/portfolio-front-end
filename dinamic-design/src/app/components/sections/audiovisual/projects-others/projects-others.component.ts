import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';
import { OthersService } from 'src/assets/services/contents/others.service';

@Component({
  selector: 'app-projects-others',
  templateUrl: './projects-others.component.html'
})
export class ProjectsOthersComponent  implements OnInit {
  //Declaración de Array
  others : any = [];
  
  //Inyección de Service completo, Service de Series y Router para acceso a detalle
    constructor (private audiovisualService:AudiovisualService, othersService:OthersService, private router: Router) 
    { 
      this.others = othersService.getOthers();
    }

    showOther(id: number) {
      this.router.navigate(['audiovisual/projects/others/other', id]);
    }

    ngOnInit(): void { 
      //Almacenamiento de datos
      this.audiovisualService.getData().subscribe(data => {
        //Información a mostrar
        this.others = data.others;
      })
    }
  
  }
  
