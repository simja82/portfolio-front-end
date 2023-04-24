import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-profile-modal',
  templateUrl: './developer-profile-modal.component.html'
})
export class DeveloperProfileModalComponent implements OnInit {

  //Array Profile
  developer_profile : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.developer_profile = data.developer_profile;
      this.buttons = data.buttons;
    })
  }
  
}
