import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html'
})
export class DeveloperProfileComponent implements OnInit {

  //Array Profile
  profile : any = [];

  //Array Sections
  sections : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.profile = data.profile;
        this.sections = data.sections;
      })
    }

  }
  