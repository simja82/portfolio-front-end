import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-cv-modal',
  templateUrl: './developer-cv-modal.component.html'
})
export class DeveloperCvModalComponent implements OnInit {

  //Array Sections CV
  sectionsCV : any = [];

  //Array Profile CV
  profileCV : any = [];

  //Array Education CV
  educationCV : any = [];

  //Array Technicals CV
  technicalsCV : any = [];

  //Array Softs CV
  softsCV : any = [];

  //Array Languages CV
  languagesCV : any = [];

  //Array Hobbies CV
  hobbiesCV : any = [];

  //Array Contact CV
  contactCV : any = [];

  //Array Social CV
  socialCV : any = [];

  //Array Experience CV
  experienceCV : any = [];

  //Array Projects CV
  projectsCV : any = [];

  //Array References CV
  referencesCV : any = [];

  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.sectionsCV = data.sectionsCV;
        this.profileCV = data.profileCV;
        this.educationCV = data.educationCV;
        this.technicalsCV = data.technicalsCV;
        this.softsCV = data.softsCV;
        this.languagesCV = data.languagesCV;
        this.hobbiesCV = data.hobbiesCV;
        this.contactCV = data.contactCV;
        this.socialCV = data.socialCV;
        this.experienceCV = data.experienceCV;
        this.projectsCV = data.projectsCV;
        this.referencesCV = data.referencesCV;
      })
    }

  }
  