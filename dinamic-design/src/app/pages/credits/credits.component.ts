import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  //Array Credits
  credits : any = [];

  //Array Music
  music : any = [];

  //Inyección de Title y Service
  constructor (private title:Title, private povService: POVService) {
    //Seteo de Title
    title.setTitle('Credits | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.credits = data.credits;
      this.music = data.music;
    })
  }

}
