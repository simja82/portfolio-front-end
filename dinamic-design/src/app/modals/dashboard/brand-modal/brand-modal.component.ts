import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-brand-modal',
  templateUrl: './brand-modal.component.html'
})
export class BrandModalComponent implements OnInit {

  //Array Brand
  brand : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.brand = data.brand;
      this.buttons = data.buttons;
    })
  }

}
