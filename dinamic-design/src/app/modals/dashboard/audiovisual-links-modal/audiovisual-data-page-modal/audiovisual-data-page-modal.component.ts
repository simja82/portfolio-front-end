import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-data-page-modal',
  templateUrl: './audiovisual-data-page-modal.component.html',
  styleUrls: ['./audiovisual-data-page-modal.component.css']
})
export class AudiovisualDataPageModalComponent implements OnInit {

  //Array Data Page
  dataPage : any = [];

  //Array Data List
  dataList : any = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) { }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.dataPage = data.dataPage;
      this.dataList = data.dataList;
      this.buttons = data.buttons;
    })
  }
  
}
