import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Developer Intro | Point of View')
  }

  ngOnInit(): void {
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000"; 
  }

  ngOnDestroy(): void { }
  
}
