import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-black-general',
  templateUrl: './black-general.component.html'
})
export class BlackGeneralComponent implements OnInit {
  //Array Social General
  socialGeneral : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.socialGeneral = data.socialGeneral;
      })
    }
  
  }
  