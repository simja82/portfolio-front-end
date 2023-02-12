import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  //Inyección de Title
  constructor (private title:Title) {
    //Seteo de Title
    title.setTitle('Feedback | Point of View');
  }
  
  ngOnInit(): void { 
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#ffffff"; 
  }    

  ngOnDestroy(): void { }

  }
