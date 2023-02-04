import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Feedback | Point of View')
  }
  
}
