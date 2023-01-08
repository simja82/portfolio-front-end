import { Component, OnInit } from '@angular/core';
import { SamplesService } from 'src/assets/services/samples/samples.service';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html'
})
export class SamplesListComponent implements OnInit {
  //Declaración de Array
  samples : any = [];
  
  //Inyección de Service
    constructor (private samplesService:SamplesService)
    {
      this.samples = samplesService.getSamples();
    }
    
    ngOnInit(): void { }
  
  }
  