import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-dashboard-audiovisual',
  templateUrl: './dashboard-audiovisual.component.html',
  styleUrls: ['./dashboard-audiovisual.component.css']
})
export class DashboardAudiovisualComponent implements OnInit {

  //Array Audiovisual
  audiovisual : any = [];
  
  //Variable del Componente
  title = "Audiovisual";

  //Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.audiovisual = data.audiovisual;
    })
  }
  
}
