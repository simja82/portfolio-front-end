import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-samples-intro',
  templateUrl: './samples-intro.component.html',
  styleUrls: ['./samples-intro.component.css']
})
export class SamplesIntroComponent implements OnInit {

  //Array Samples Page
  samples_page : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.samples_page = data.samples_page;
      })
    }
  
  }
  