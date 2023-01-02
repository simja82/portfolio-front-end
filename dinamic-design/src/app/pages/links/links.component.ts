import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GeneralService } from 'src/assets/services/general.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  //Array Index
links : any = [];

//Image Background
photo = true;

//Inyección de Title y Service
  constructor (private title:Title, private generalService:GeneralService) {
    //Seteo de Title
    title.setTitle('Audiovisual Links | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.generalService.getData().subscribe(data => {
      //Información a mostrar
      this.links = data.links;
    })
  }

}
