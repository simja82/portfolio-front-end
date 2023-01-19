import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-to-cv',
  templateUrl: './developer-to-cv.component.html'
})
export class DeveloperToCvComponent implements OnInit {

  //Array To CV
  toCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.toCV = data.toCV;
      })
    }

  }
  