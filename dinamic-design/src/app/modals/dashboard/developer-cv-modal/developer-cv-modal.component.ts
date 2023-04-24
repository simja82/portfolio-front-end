import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-cv-modal',
  templateUrl: './developer-cv-modal.component.html',
  styleUrls: ['./developer-cv-modal.component.css']
})
export class DeveloperCvModalComponent implements OnInit {

  //Array Developer CV
  developer_cv : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.developer_cv = data.developer_cv;
      this.buttons = data.buttons;
    })
  }


}
