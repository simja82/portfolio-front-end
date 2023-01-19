import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-feedback',
  templateUrl: './audiovisual-feedback.component.html'
})
export class AudiovisualFeedbackComponent implements OnInit {

  //Array Feedback Intro
  feedbackIntro : any = [];

  //Array Saying
  saying : any = [];
  
  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.feedbackIntro = data.feedbackIntro;
      this.saying = data.saying;
    })
  }
  
}
