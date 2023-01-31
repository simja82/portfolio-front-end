import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-audiovisual-sample-modal',
  templateUrl: './delete-audiovisual-sample-modal.component.html'
})
export class DeleteAudiovisualSampleModalComponent implements OnInit {

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
    Swal.fire('Muy bien!!!', 'La Muestra ha sido eliminada', 'success')
  }

  //Sweet Alert Cancel
  alertWithCancel(){
    Swal.fire('Bueno...', 'La Muestra no ha sido eliminada', 'error')
  }

}
