import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-dashboard-developer',
  templateUrl: './dashboard-developer.component.html',
  styleUrls: ['./dashboard-developer.component.css']
})
export class DashboardDeveloperComponent implements OnInit {

  //Array Developer
  developer : any = [];
  
  //Variable del Componente
  title = "Developer";

  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.developer = data.developer;
    })
  }
  
}
