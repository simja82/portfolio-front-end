import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';
import { SamplesService } from 'src/assets/services/samples/samples.service';

@Component({
  selector: 'app-audiovisual-samples-page-modal',
  templateUrl: './audiovisual-samples-page-modal.component.html'
})
export class AudiovisualSamplesPageModalComponent implements OnInit {

  //Array Samples Page
  samplesPage : any = [];

  //Array Samples del Servicio Samples
  samples: any [] = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service y Service Samples
    constructor (private povService:POVService, private samplesService:SamplesService) 
    {
        //Información a mostrar
        this.samples = samplesService.getSamples();
    }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.samplesPage = data.samplesPage;
      this.buttons = data.buttons;
    })
  }
  
}
