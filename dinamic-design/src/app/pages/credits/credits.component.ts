import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AudiovisualService } from 'src/assets/services/audiovisual.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

credits : any = [];

  constructor (private title:Title, private audiovisualService: AudiovisualService) {
    title.setTitle('Credits | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.audiovisualService.getData().subscribe(data => {
      //Información a mostrar
      this.credits = data.credits;
    })
  }

}
