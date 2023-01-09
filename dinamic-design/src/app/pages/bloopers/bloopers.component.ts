import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-bloopers',
  templateUrl: './bloopers.component.html',
  styleUrls: ['./bloopers.component.css']
})
export class BloopersComponent implements OnInit {
  //Array Bloopers
  bloopers : any = [];

  //Inyección de Title y Service
  constructor (private title:Title, private audiovisualService:AudiovisualService) {
    //Seteo de Title
    title.setTitle('Bloopers | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.bloopers = data.bloopers;
    })
  }

}
