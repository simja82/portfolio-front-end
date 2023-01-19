import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-heroes-modal',
  templateUrl: './heroes-modal.component.html'
})
export class HeroesModalComponent implements OnInit {
  
  //Array Heroes
  heroes : any = [];

  //Inyección de Service
  constructor (private povService:POVService) { }

  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.heroes = data.heroes;
    })
  }

}
