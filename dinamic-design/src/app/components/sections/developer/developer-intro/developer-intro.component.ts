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
  //intro: Intro = new Intro ("", "", "", "", "");

  intro?: Intro [];

  //Combinación de Modelos
  blendedData: any;

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

    //Inyección de Service
    constructor(private introService:IntroService) { }

    //Buscar Datos
    ngOnInit() {
      
      this.introService.findIntro(1).subscribe((data) => {
        this.intro = data;
        this.dataPooling();
      });

//this.cargarItem();
      
    }

    /*
    cargarItem(){
      this.introService.findIntro(1).subscribe({
          next: (data) => {
            this.intro=data;
            //this.form.setValue(data);
          },
          error: (e) => console.error(e),
          complete: () => 
console.info
('complete')
        });
      console.log("Se cargó correctamente la intro");
    } 
*/

    
    //Combinación de Datos
    dataPooling() {
      if (this.intro) {
        // Combinación de datos
        this.blendedData = {
          intro: this.intro
        };
      }
    }
    
}
