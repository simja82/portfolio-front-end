import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-hobbies',
  templateUrl: './cv-hobbies.component.html'
})
export class CvHobbiesComponent  implements OnInit {

  //Array Hobbies CV
  hobbiesCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.hobbiesCV = data.hobbiesCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
  