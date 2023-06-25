//Modelo de Lógica para Datos Simples
import { Component, OnInit } from '@angular/core';

//Models
import { Intro } from 'src/app/models/intro';

//Services
import { IntroService } from 'src/app/services/intro.service';

@Component({
  selector: 'app-developer-intro',
  templateUrl: './developer-intro.component.html'
})
export class DeveloperIntroComponent implements OnInit {

  //Intro Model 
  intro: Intro = new Intro ("", "", "", "", "");

  //Inyección de Service
    constructor (private introService:IntroService) { }

    //Traer Datos
    ngOnInit() {
      this.loadIntro();
    }    

    loadIntro(){
      this.introService.findIntro(1).subscribe({
          next: (data) => {
            this.intro = data;
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
    }

}
