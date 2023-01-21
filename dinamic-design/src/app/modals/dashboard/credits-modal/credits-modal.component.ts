import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-credits-modal',
  templateUrl: './credits-modal.component.html'
})
export class CreditsModalComponent implements OnInit {

  //Array Credits
  credits : any = [];

  //Array Single Credits
  singleCredits : any = [];

  //Array Double Credits
  doubleCredits : any = [];

  //Array Triple Credits
  tripleCredits : any = [];

  //Array Thanks
  thanks : any = [];

  //Array Made
  made : any = [];

  //Array More
  more : any = [];

  //Array Music Credits
  musicCredits : any = [];

  //Array Blooper Credits
  bloopersCredits : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.credits = data.credits;
      this.singleCredits = data.singleCredits;
      this.doubleCredits = data.doubleCredits;
      this.tripleCredits = data.tripleCredits;
      this.thanks = data.thanks;
      this.made = data.made;
      this.more = data.more;
      this.musicCredits = data.musicCredits;
      this.bloopersCredits = data.bloopersCredits;
      this.buttons = data.buttons;
    })
  }

}
