import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-black-audiovisual',
  templateUrl: './black-audiovisual.component.html'
})
export class BlackAudiovisualComponent implements OnInit {
  
  //Array Social Audiovisual
  social_audiovisual : any = [];
  
  //Inyección de Service
      constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.social_audiovisual = data.social_audiovisual;
      })
    }
  
  }
  