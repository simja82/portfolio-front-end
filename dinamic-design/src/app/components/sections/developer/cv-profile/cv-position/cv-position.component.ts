import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-position',
  templateUrl: './cv-position.component.html'
})
export class CvPositionComponent implements OnInit {

  //Array Profile CV
  profileCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.profileCV = data.profileCV;
      })
    }

  }
  