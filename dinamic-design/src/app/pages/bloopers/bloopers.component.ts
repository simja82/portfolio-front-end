import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-bloopers',
  templateUrl: './bloopers.component.html',
  styleUrls: ['./bloopers.component.css']
})
export class BloopersComponent implements OnInit {

  //Array Bloopers
  bloopers : any = [];

  //Array Line Bloopers
  lineBloopers : any = [];

  //Array Music
  music : any = [];

  //Inyección de Title y Service
  constructor (private title:Title, private povService:POVService) {
    //Seteo de Title
    title.setTitle('Bloopers | Point of View');
  }

  ngOnInit(): void { 
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#ffffff"; 

    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.bloopers = data.bloopers;
      this.lineBloopers = data.lineBloopers;
      this.music = data.music;
    })
  }

  ngOnDestroy(): void { }

}
