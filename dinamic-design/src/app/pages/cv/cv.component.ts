import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  //Array CV
  cv : any = [];

  //Inyección de Title y Services
    constructor (private title:Title, private povService:POVService) {
      //Seteo de Title
      title.setTitle('Developer CV | Point of View');
    }
    
    ngOnInit(): void {
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000"; 

    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.cv = data.cv;
      })
    }

    ngOnDestroy(): void { }    

  }
  