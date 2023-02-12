import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
//Array Banners
banners : any = [];

//Array Buttons
buttons : any = [];

//Inyección de Title y Service
  constructor (private title:Title, private povService:POVService) {
    //Seteo de Title
    title.setTitle('Register | Point of View');
  }

  ngOnInit(): void { 
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000";

    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.buttons = data.buttons;
    })
  }

  ngOnDestroy(): void { }

}
