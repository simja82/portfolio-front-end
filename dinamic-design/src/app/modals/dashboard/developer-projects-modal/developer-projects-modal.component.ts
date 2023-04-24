import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-projects-modal',
  templateUrl: './developer-projects-modal.component.html'
})
export class DeveloperProjectsModalComponent implements OnInit {

  //Array Developer Projects
  developer_projects : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.developer_projects = data.developer_projects;
      this.buttons = data.buttons;
    })
  }
  
}
