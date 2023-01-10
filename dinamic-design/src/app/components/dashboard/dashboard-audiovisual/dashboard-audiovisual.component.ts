import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/assets/services/dashboard.service';

@Component({
  selector: 'app-dashboard-audiovisual',
  templateUrl: './dashboard-audiovisual.component.html',
  styleUrls: ['./dashboard-audiovisual.component.css']
})
export class DashboardAudiovisualComponent implements OnInit {
  //Declaración de Array
  audiovisual : any = [];
  
  //Variable del Componente
  title = "Audiovisual";

  //Inyección de Service
  constructor (private dashboardService:DashboardService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.dashboardService.getData().subscribe(data => {
      //Información a mostrar
      this.audiovisual = data.audiovisual;
    })
  }
  
}
