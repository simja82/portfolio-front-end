import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-white-brand',
  templateUrl: './white.component.html'
})
export class WhiteBrandComponent implements OnInit {
  
  //Array Brand
  brand : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.brand = data.brand;
    })
  }

}
