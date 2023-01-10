import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  //Declaración de Array
  cv : any = [];

  constructor (private title:Title, private developerService:DeveloperService) {
    title.setTitle('Developer CV | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.cv = data.cv;
    })
  }

}
