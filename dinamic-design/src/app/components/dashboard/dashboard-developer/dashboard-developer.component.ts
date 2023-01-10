import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/assets/services/dashboard.service';

@Component({
  selector: 'app-dashboard-developer',
  templateUrl: './dashboard-developer.component.html',
  styleUrls: ['./dashboard-developer.component.css']
})
export class DashboardDeveloperComponent implements OnInit {
  //Declaración de Array
  developer : any = [];
  
  //Variable del Componente
  title = "Developer";

  //Inyección de Service
  constructor (private dashboardService:DashboardService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.dashboardService.getData().subscribe(data => {
      //Información a mostrar
      this.developer = data.developer;
    })
  }
  
}
