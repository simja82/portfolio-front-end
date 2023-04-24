import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-data-intro',
  templateUrl: './data-intro.component.html',
  styleUrls: ['./data-intro.component.css']
})
export class DataIntroComponent implements OnInit {

  //Array Data Page
  data_page : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.data_page = data.data_page;
      })
    }
  
  }
  