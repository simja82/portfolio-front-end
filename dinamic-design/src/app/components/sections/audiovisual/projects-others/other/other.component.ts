import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OthersService } from 'src/assets/services/contents/others.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  //Datos de Other
  other: any = {};

  //Inyección de Title, Activated Route y Servicio de Other
  constructor (private title:Title, private activatedRoute: ActivatedRoute, private othersService: OthersService) 
    { 
      //Seteo de Title
      title.setTitle('Other Detail | Point of View');

      //Detalle de Other por id
      this.activatedRoute.params.subscribe((params) => {
        this.other = this.othersService.getOther(params['id']);
      });
    }

    ngOnInit(): void {
      //Color del Ícono de Accesibilidad
      (window as any).interdeal.btnStyle.color.second = "#000000"; 
    }

}
