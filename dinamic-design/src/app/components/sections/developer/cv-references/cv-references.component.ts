import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv-references',
  templateUrl: './cv-references.component.html'
})
export class CvReferencesComponent implements OnInit {

  //Array References CV
  referencesCV : any = [];

  //Array Sections CV
  sectionsCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.referencesCV = data.referencesCV;
        this.sectionsCV = data.sectionsCV;
      })
    }

  }
