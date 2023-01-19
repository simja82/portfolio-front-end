import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-social',
  templateUrl: './cv-social.component.html'
})
export class CvSocialComponent implements OnInit {

  //Array Social CV
  socialCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.socialCV = data.socialCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
