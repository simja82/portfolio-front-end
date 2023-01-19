import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-languages',
  templateUrl: './cv-languages.component.html'
})
export class CvLanguagesComponent implements OnInit {

  //Array Languages CV
  languagesCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.languagesCV = data.languagesCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
  