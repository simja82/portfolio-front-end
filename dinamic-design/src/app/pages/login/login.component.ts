import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GeneralService } from 'src/assets/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//Array Index
login : any = [];

//Image Background
photo = true;

//Inyección de Title y Service
  constructor (private title:Title, private generalService:GeneralService) {
    //Seteo de Title
    title.setTitle('Login | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.generalService.getData().subscribe(data => {
      //Información a mostrar
      this.login = data.login;
    })
  }

}