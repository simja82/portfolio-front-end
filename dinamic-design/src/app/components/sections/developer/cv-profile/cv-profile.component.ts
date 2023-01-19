import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-profile',
  templateUrl: './cv-profile.component.html'
})
export class CvProfileComponent implements OnInit {

  //Array Profile CV
  profileCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.profileCV = data.profileCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
  