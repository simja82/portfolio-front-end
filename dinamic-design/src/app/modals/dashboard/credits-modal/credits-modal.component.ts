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
  single_credits : any = [];

  //Array Double Credits
  double_credits : any = [];

  //Array Triple Credits
  triple_credits : any = [];

  //Array Thanks
  thanks : any = [];

  //Array Made
  made : any = [];

  //Array More
  more : any = [];

  //Array Music
  music : any = [];

  //Array Blooper Credits
  blooper_credits : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.credits = data.credits;
      this.single_credits = data.single_credits;
      this.double_credits = data.double_credits;
      this.triple_credits = data.triple_credits;
      this.thanks = data.thanks;
      this.made = data.made;
      this.more = data.more;
      this.music = data.music;
      this.blooper_credits = data.blooper_credits;
      this.buttons = data.buttons;
    })
  }

}
