import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-audiovisual-quote-modal',
  templateUrl: './delete-audiovisual-quote-modal.component.html'
})
export class DeleteAudiovisualQuoteModalComponent implements OnInit {

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
    Swal.fire('Muy bien!!!', 'La frase ha sido eliminada', 'success')
  }

  //Sweet Alert Cancel
  alertWithCancel(){
    Swal.fire('Bueno...', 'La frase no ha sido eliminada', 'error')
  }

}
