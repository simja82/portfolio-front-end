//Modelo de Lógica para Datos Recorridos
import { Component, OnInit } from '@angular/core';

//Models
import { Study } from 'src/app/models/study';

//Services
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-developer-education',
  templateUrl: './developer-education.component.html'
})
export class DeveloperEducationComponent implements OnInit {

  //Studies Model
  studies : Study [] = [];

  //Inyección de Service
    constructor (private studyService:StudyService) {
    }
    
    //Traer Datos
    ngOnInit(): void {
      this.loadStudies();
    } 

    loadStudies() {
      this.studyService.getStudies().subscribe({
          next: (data) => {
            this.studies=data;
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
    }

  }
  