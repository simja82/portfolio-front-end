import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html'
})
export class SocialModalComponent implements OnInit {

  //Arrays Social General
  social_general : any = [];

  //Array Social Audiovisual
  social_audiovisual : any = [];

  //Array Social Developer
  social_developer : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.social_general = data.social_general;
      this.social_audiovisual = data.social_audiovisual;
      this.social_developer = data.social_developer;
      this.buttons = data.buttons;
    });
  }

}
