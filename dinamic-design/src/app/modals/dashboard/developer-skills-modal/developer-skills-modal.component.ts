import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-skills-modal',
  templateUrl: './developer-skills-modal.component.html',
  styleUrls: ['./developer-skills-modal.component.css']
})
export class DeveloperSkillsModalComponent implements OnInit {

  //Array Technicals
  technicals : any = [];

  //Array Softs
  softs : any = [];

  //Array Languages
  languages : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.technicals = data.technicals;
      this.softs = data.softs;
      this.languages = data.languages;
      this.buttons = data.buttons;
    })
  }
  
}
