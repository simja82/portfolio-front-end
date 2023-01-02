import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GeneralService } from 'src/assets/services/general.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
//Array Index
error : any = [];

//Image Background
photo = true;

//Inyección de Title y Service
  constructor (private title:Title, private generalService:GeneralService) {
    //Seteo de Title
    title.setTitle('Error | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.generalService.getData().subscribe(data => {
      //Información a mostrar
      this.error = data.error;
    })
  }

}
