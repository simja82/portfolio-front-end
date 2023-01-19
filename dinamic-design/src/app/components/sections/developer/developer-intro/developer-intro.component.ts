import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-intro',
  templateUrl: './developer-intro.component.html'
})
export class DeveloperIntroComponent implements OnInit {

  //Array Intro
  intro : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.intro = data.intro;
      })
    }
  
  }
  