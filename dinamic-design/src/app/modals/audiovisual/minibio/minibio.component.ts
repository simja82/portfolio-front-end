import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-minibio',
  templateUrl: './minibio.component.html',
  styleUrls: ['./minibio.component.css']
})
export class MinibioComponent implements OnInit {

  //Array Minibio
  minibio : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.minibio = data.minibio;
        this.buttons = data.buttons;
      })
    }
  
  }
  