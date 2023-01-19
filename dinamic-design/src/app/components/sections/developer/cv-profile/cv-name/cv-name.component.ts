import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-name',
  templateUrl: './cv-name.component.html'
})
export class CvNameComponent implements OnInit {

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
  