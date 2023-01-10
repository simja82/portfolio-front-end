import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/assets/services/developer.service';

@Component({
  selector: 'app-cv-profile',
  templateUrl: './cv-profile.component.html'
})
export class CvProfileComponent implements OnInit {
  //Declaración de Array
  profileCV : any = [];

  constructor (private developerService:DeveloperService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.developerService.getData().subscribe(data => {
      //Información a mostrar
      this.profileCV = data.profileCV;
    })
  }

}
