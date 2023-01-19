import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html'
})
export class SocialModalComponent implements OnInit {

  //Arrays Social General
  socialGeneral : any = [];

  //Array Social Audiovisual
  socialAudiovisual : any = [];

  //Array Social Developer
  socialDeveloper : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.socialGeneral = data.socialGeneral;
      this.socialAudiovisual = data.socialAudiovisual;
      this.socialDeveloper = data.socialDeveloper;
      this.buttons = data.buttons;
    });
  }

}
