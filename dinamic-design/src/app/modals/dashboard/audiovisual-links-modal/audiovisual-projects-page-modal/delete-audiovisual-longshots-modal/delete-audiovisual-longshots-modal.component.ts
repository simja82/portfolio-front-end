import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-audiovisual-longshots-modal',
  templateUrl: './delete-audiovisual-longshots-modal.component.html'
})
export class DeleteAudiovisualLongshotsModalComponent implements OnInit {

  //Array Buttons
  buttons : any = [];

  //Inyección de Service
  constructor(private povService:POVService) {}

  ngOnInit(): void { 
        
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.buttons = data.buttons;
    })
  }

  //Sweet Alert Success  
  alertWithSuccess(){
    Swal.fire('Muy bien!!!', 'El Longshot ha sido eliminado', 'success')
  }

  //Sweet Alert Success
  alertWithCancel(){
    Swal.fire('Bueno...', 'El Longshot no ha sido eliminado', 'error')
  }

}
