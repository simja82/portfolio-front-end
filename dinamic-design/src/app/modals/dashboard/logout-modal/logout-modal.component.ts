import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html'
})
export class LogoutModalComponent implements OnInit {

  //Array Logout
  logout : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.logout = data.logout;
      this.buttons = data.buttons;
    })
  }

}
