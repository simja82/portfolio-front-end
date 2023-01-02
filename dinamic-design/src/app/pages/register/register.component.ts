import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GeneralService } from 'src/assets/services/general.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//Array Index
register : any = [];

//Image Background
photo = true;

//Inyección de Title y Service
  constructor (private title:Title, private generalService:GeneralService) {
    //Seteo de Title
    title.setTitle('Register | Point of View')
  }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.generalService.getData().subscribe(data => {
      //Información a mostrar
      this.register = data.register;
    })
  }

}
