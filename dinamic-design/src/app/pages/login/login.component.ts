import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
//Array Banners
banners : any = [];

//Array Forms
forms : any = [];

//Array Helpers
helpers : any = [];

//Array Buttons
buttons : any = [];

//Array Phrases
phrases : any = [];

//Inyección de Title y Service
  constructor (private title:Title, private povService:POVService) {
    //Seteo de Title
    title.setTitle('Login | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.forms = data.forms;
      this.helpers = data.helpers;
      this.buttons = data.buttons;
      this.phrases = data.phrases;
    })
  }

}