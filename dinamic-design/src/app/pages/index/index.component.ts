import { Component, OnInit, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

//Array Banners
banners : any = [];

//Array Buttons
buttons : any = [];

//Inyección de Title y Service
  constructor (private title:Title, private povService:POVService) {
    //Seteo de Title
    title.setTitle('Index | Point of View');
  }
  
  ngOnInit(): void {
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#ffffff"; 

    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.buttons = data.buttons;
    });
  }

  ngOnDestroy(): void { }
  
}
