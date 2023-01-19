import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-references',
  templateUrl: './developer-references.component.html'
})
export class DeveloperReferencesComponent implements OnInit {

  //Array References
  references : any = [];

  //Array Sections
  sections : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.references = data.references;
        this.sections = data.sections;
      })
    }

  }
  