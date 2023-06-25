import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.css']
})
export class DashboardModalComponent implements OnInit {

  //Array General
  general : any = [];

  //Array Audiovisual
  audiovisual : any = [];

  //Array Developer
  developer : any = [];  

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.general = data.general;
      this.audiovisual = data.audiovisual;
      this.developer = data.developer;
    })
  }

}
