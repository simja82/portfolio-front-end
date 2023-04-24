import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-data-page-modal',
  templateUrl: './audiovisual-data-page-modal.component.html',
  styleUrls: ['./audiovisual-data-page-modal.component.css']
})
export class AudiovisualDataPageModalComponent implements OnInit {

  //Array Data Page
  data_page : any = [];

  //Array Data List
  data_list : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.data_page = data.data_page;
      this.data_list = data.data_list;
      this.buttons = data.buttons;
    })
  }
  
}
