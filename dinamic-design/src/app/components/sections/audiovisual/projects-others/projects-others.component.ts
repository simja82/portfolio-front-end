import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OthersService } from 'src/assets/services/contents/others.service';

@Component({
  selector: 'app-projects-others',
  templateUrl: './projects-others.component.html'
})
export class ProjectsOthersComponent  implements OnInit {

  //Array Others del Servicio Others
  others : any = [];
  
  //Inyección deService de Others y Router para acceso a detalle
    constructor (private othersService:OthersService, private router: Router) 
    { 
      //Información a mostrar
      this.others = othersService.getOthers();
    }

    //Ruta a Detalle
    showOther(id: number) {
      this.router.navigate(['audiovisual/projects/others/other', id-1]);
    }

    ngOnInit(): void { }
  
  }
  