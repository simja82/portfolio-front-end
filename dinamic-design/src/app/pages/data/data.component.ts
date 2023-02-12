import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Audiovisual Data | Point of View');
  }

  ngOnInit(): void {
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000"; 
  }

  ngOnDestroy(): void { }

}
