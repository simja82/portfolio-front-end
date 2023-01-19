import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
 
//Array Banners
banners : any = [];

//Array Heroes
heroes : any = [];

//Array Buttons
buttons : any = [];

//Array Phrases
phrases : any = [];

//Inyección de Title y Service
  constructor (private title:Title, private povService:POVService) {
    //Seteo de Title
    title.setTitle('Audiovisual Links | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.heroes = data.heroes;
      this.buttons = data.buttons;
      this.phrases = data.phrases;
    })
  }

}
