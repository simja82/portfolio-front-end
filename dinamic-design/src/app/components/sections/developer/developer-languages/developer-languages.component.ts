import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-languages',
  templateUrl: './developer-languages.component.html'
})
export class DeveloperLanguagesComponent implements OnInit {

  //Array Languages
  languages : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.languages = data.languages;
        this.sections = data.sections;
      })
    }

  }
  