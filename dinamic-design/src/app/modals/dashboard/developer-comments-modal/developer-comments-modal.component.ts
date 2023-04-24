import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-comments-modal',
  templateUrl: './developer-comments-modal.component.html'
})
export class DeveloperCommentsModalComponent implements OnInit {

  //Array Comments
  comments : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.comments = data.comments;
      this.buttons = data.buttons;
    })
  }
  
}

