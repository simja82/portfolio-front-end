import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proofreader',
  templateUrl: './proofreader.component.html',
  styleUrls: ['./proofreader.component.css']
})
export class ProofreaderComponent implements OnInit {

  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Proofreader | Point of View');
  }

  ngOnInit(): void { 
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#ffffff";
  }

  ngOnDestroy(): void { }

}
