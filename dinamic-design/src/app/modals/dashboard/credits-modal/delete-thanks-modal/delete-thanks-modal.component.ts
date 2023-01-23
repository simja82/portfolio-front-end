import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-thanks-modal',
  templateUrl: './delete-thanks-modal.component.html'
})
export class DeleteThanksModalComponent implements OnInit {

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
    Swal.fire('Muy bien!!!', 'El agradecimiento ha sido eliminado', 'success')
  }

  //Sweet Alert Success
  alertWithCancel(){
    Swal.fire('Bueno...', 'El agradecimiento no ha sido eliminado', 'error')
  }

}
