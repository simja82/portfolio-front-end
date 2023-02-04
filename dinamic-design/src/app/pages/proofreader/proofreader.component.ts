import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proofreader',
  templateUrl: './proofreader.component.html',
  styleUrls: ['./proofreader.component.css']
})
export class ProofreaderComponent {

  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Proofreader | Point of View')
  }

}
