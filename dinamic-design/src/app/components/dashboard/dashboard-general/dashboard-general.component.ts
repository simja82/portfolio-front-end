import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/assets/services/dashboard.service';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.css']
})
export class DashboardGeneralComponent implements OnInit {
  //Declaración de Array
  general : any = [];
  
  //Variable del Componente
  title = "General";

  //Inyección de Service
  constructor (private dashboardService:DashboardService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.dashboardService.getData().subscribe(data => {
      //Información a mostrar
      this.general = data.general;
    })
  }
  
}
