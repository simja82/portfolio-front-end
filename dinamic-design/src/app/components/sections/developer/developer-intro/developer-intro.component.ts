import { Component, OnInit } from '@angular/core';

//Datos del JSON
//import { POVService } from 'src/assets/services/pov.service';

//Models
import { Intro } from 'src/app/models/intro';

//Services
import { IntroService } from 'src/app/services/intro.service';

@Component({
  selector: 'app-developer-intro',
  templateUrl: './developer-intro.component.html'
})
export class DeveloperIntroComponent implements OnInit {

  /*
  //Array Intro
  intro : any = [];
  */

  //Intro Model
  intro: Intro = new Intro("");
  id?:number;

  /*
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
  //ngOnInit con JSON  
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.intro = data.intro;
      })
    }
  */

    //Inyección de Services
    constructor(private servicio:IntroService) { }

    //Buscar Datos
    ngOnInit(): void {
      this.cargarItem();
    }
  
    cargarItem(){
      this.servicio.getById(1).subscribe({
          next: (data) => {
            this.intro=data;
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
      console.log("No carga");
      }

  }
  