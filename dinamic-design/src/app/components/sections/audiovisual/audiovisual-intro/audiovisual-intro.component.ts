import { Component, OnInit} from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-intro',
  templateUrl: './audiovisual-intro.component.html',
  styleUrls: ['./audiovisual-intro.component.css']
})
export class AudiovisualIntroComponent implements OnInit {

//Array Cover
cover : any = [];

//Inyección de Service
  constructor (private povService:POVService) {
  }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.cover = data.cover;
    })
  }

}
