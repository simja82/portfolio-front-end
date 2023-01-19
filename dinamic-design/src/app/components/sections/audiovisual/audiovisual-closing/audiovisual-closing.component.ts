import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-closing',
  templateUrl: './audiovisual-closing.component.html'
})
export class AudiovisualClosingComponent implements OnInit {

  //Array Closing
  closing : any = [];
  
  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.closing = data.closing;
    })
  }
  
}
