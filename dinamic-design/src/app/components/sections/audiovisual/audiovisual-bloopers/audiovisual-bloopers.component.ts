import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-bloopers',
  templateUrl: './audiovisual-bloopers.component.html'
})
export class AudiovisualBloopersComponent implements OnInit {

  //Arrays Bloopers
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
