import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
 
//Array Banners
banners : any = [];

//Array Buttons
buttons : any = [];

//Inyección de Title y Service
  constructor (private title:Title, private povService:POVService) {
    //Seteo de Title
    title.setTitle('Intro | Point of View')
  }

  ngOnInit(): void {
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.buttons = data.buttons;
    })
  }

}
