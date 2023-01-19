import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-skills-cv-modal',
  templateUrl: './skills-cv-modal.component.html'
})
export class SkillsCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Technicals CV
  technicalsCV : any = [];

  //Array Softs CV
  softsCV : any = [];

  //Array Languages CV
  languagesCV : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.sectionsCV = data.sectionsCV;
        this.technicalsCV = data.technicalsCV;
        this.softsCV = data.softsCV;
        this.languagesCV = data.languagesCV;
        this.buttons = data.buttons;
      })
    }

  }
  
