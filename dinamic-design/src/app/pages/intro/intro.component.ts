import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GeneralService } from 'src/assets/services/general.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
 
//Array Index
intro : any = [];

//Image Background
photo = true;

//Inyección de Title y Service
  constructor (private title:Title, private generalService:GeneralService) {
    //Seteo de Title
    title.setTitle('Intro | Point of View')
  }

  ngOnInit(): void {
    //Almacenamiento de datos
    this.generalService.getData().subscribe(data => {
      //Información a mostrar
      this.intro = data.intro;
    })
  }

}
