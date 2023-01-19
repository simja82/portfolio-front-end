import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-white-logo',
  templateUrl: './white.component.html'
})
export class WhiteLogoComponent implements OnInit {
  
  //Array Logo
  logo : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.logo = data.logo;
    })
  }

}
