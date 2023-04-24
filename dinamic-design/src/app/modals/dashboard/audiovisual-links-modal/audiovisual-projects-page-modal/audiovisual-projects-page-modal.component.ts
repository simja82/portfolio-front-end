import { Component, OnInit } from '@angular/core';
import { LongshotsService } from 'src/assets/services/contents/longshots.service';
import { OthersService } from 'src/assets/services/contents/others.service';
import { SeriesService } from 'src/assets/services/contents/series.service';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-audiovisual-projects-page-modal',
  templateUrl: './audiovisual-projects-page-modal.component.html'
})
export class AudiovisualProjectsPageModalComponent implements OnInit {

  //Array Projects Page
  projects_page : any = [];

  //Array Series del Servicio Series
  series: any [] = [];

  //Array Longshots del Servicio Longshots
  longshots: any [] = [];

  //Array Others del Servicio Others
  others: any [] = [];

  //Array Buttons
  buttons : any = [];
  
  //Inyección de Service y Service Series
    constructor (private povService:POVService, private seriesService:SeriesService, private longshotsService:LongshotsService, private othersService:OthersService) 
    {
        //Información a mostrar
        this.series = seriesService.getSeries();
        this.longshots = longshotsService.getLongshots();
        this.others = othersService.getOthers(); 
    }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.projects_page = data.projects_page;
      this.buttons = data.buttons;
    })
  }
  
}
