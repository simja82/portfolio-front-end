import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-feedback',
  templateUrl: './audiovisual-feedback.component.html'
})
export class AudiovisualFeedbackComponent implements OnInit {

  //Array Feedback Intro
  feedback_intro : any = [];

  //Array Saying
  saying : any = [];
  
  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.feedback_intro = data.feedback_intro;
      this.saying = data.saying;
    })
  }
  
}
