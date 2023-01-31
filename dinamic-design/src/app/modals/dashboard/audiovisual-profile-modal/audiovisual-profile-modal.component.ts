import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-profile-modal',
  templateUrl: './audiovisual-profile-modal.component.html'
})
export class AudiovisualProfileModalComponent implements OnInit {
  
  //Array Audiovisual Profile
  audiovisualProfile : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.audiovisualProfile = data.audiovisualProfile;
      this.buttons = data.buttons;
    })
  }

}

