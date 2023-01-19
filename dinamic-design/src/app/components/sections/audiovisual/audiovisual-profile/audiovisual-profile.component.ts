import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-profile',
  templateUrl: './audiovisual-profile.component.html'
})
export class AudiovisualProfileComponent implements OnInit {

//Array Audiovisual Profile
audiovisualProfile : any = [];

//Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.audiovisualProfile = data.audiovisualProfile;
    })
  }

}
