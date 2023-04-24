import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-i-want',
  templateUrl: './i-want.component.html',
  styleUrls: ['./i-want.component.css']
})
export class IWantComponent implements OnInit {

  //Array I Want
  iwant : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.iwant = data.iwant;
      })
    }
  
  }
  
