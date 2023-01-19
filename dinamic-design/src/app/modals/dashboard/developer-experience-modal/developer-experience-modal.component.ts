import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-experience-modal',
  templateUrl: './developer-experience-modal.component.html'
})
export class DeveloperExperienceModalComponent implements OnInit {

  //Array Experiences
  experiences : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.experiences = data.experiences;
      this.buttons = data.buttons;
    })
  }
  
}
