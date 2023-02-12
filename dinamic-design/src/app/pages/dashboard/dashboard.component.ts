import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Admin Dashboard | Point of View');
  }

  ngOnInit(): void { 
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000"; 
  }
  
  ngOnDestroy(): void { }

}
