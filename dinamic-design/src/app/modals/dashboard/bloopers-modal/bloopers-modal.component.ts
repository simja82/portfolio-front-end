import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-bloopers-modal',
  templateUrl: './bloopers-modal.component.html'
})
export class BloopersModalComponent implements OnInit {

  //Arrays Bloopers
  bloopers : any = [];
  blooperOne : any = [];
  blooperTwo : any = [];
  blooperThree : any = [];
  blooperFour : any = [];
  blooperFive : any = [];
  blooperSix : any = [];
  blooperSeven : any = [];

  //Arrays Lines
  lineBe : any = [];
  lineBreak : any = [];
  lineTime : any = [];
  lineWin : any = [];
  lineMemory : any = [];
  lineSpaces : any = [];

  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.bloopers = data.bloopers;
      this.blooperOne = data.blooperOne;
      this.lineBe = data.lineBe;
      this.blooperTwo = data.blooperTwo;
      this.lineBreak = data.lineBreak;
      this.blooperThree = data.blooperThree;
      this.lineTime = data.lineTime;
      this.blooperFour = data.blooperFour;
      this.lineWin = data.lineWin;
      this.blooperFive = data.blooperFive;
      this.lineMemory = data.lineMemory;
      this.blooperSix = data.blooperSix;
      this.lineSpaces = data.lineSpaces;
      this.blooperSeven = data.blooperSeven;
    })
  }
  
}
