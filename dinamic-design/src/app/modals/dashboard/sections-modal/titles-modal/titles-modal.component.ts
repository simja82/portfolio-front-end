import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-titles-modal',
  templateUrl: './titles-modal.component.html'
})
export class TitlesModalComponent implements OnInit {

  //Array Sections
  sections : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.sections = data.sections;
    })
  }

}
