import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-hobbies',
  templateUrl: './developer-hobbies.component.html'
})
export class DeveloperHobbiesComponent implements OnInit {

  //Array Hobbies
  hobbies : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.hobbies = data.hobbies;
        this.sections = data.sections;
      })
    }

  }
  