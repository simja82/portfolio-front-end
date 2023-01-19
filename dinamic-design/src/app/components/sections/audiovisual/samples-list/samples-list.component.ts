import { Component, OnInit } from '@angular/core';
import { SamplesService } from 'src/assets/services/samples/samples.service';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html'
})
export class SamplesListComponent implements OnInit {

  //Array de Samples del Servicio Samples
  samples : any = [];
  
  //Inyección de Service
    constructor (private samplesService:SamplesService)
    {
      //Información a mostrar
      this.samples = samplesService.getSamples();
    }
    
    ngOnInit(): void { }
  
  }
  