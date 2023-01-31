import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-audiovisual-want-modal',
  templateUrl: './edit-audiovisual-want-modal.component.html'
})
export class EditAudiovisualWantModalComponent implements OnInit {

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    paragraphOne: new FormControl(''),
    paragraphTwo: new FormControl(''),
    paragraphThree: new FormControl(''),
    paragraphFour: new FormControl(''),
    paragraphFive: new FormControl(''),
    paragraphSix: new FormControl(''),
    paragraphSeven: new FormControl(''),
    url: new FormControl(''),
  });
  submitted = false;

  //Array Forms
  forms : any = [];

  //Array Helpers
  helpers : any = [];

  //Array Buttons
  buttons : any = [];

  //Service y Constructor de Formularios
  constructor(private formBuilder: FormBuilder, private povService:POVService) {}

  ngOnInit(): void { 
    //Reglas de los Campos del Formulario
    this.form = this.formBuilder.group(
      {
        paragraphOne: ['', [Validators.required]],
        paragraphTwo: ['', [Validators.required]],
        paragraphThree: ['', [Validators.required]],
        paragraphFour: ['', [Validators.required]],
        paragraphFive: ['', [Validators.required]],
        paragraphSix: ['', [Validators.required]],
        paragraphSeven: ['', [Validators.required]],
        url: ['', [Validators.required]],
      }
    );
        
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.forms = data.forms;
      this.helpers = data.helpers;
      this.buttons = data.buttons;
    })
  }

  //Traer Formulario
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //Enviar Formulario
  onSubmit(): void {
    //Válido
    this.submitted = true;
    this.alertWithSuccess();
    //Inválido
    if (this.form.invalid) {
      this.form.reset();
      this.alertWithWarning();
    }
  }

  //Resetear Formulario
  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.ngOnInit();
  }

  //Sweet Alert Success  
  alertWithSuccess(){
    Swal.fire('Sí!!!', 'El documento ha sido actualizado', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'El documento no ha sido actualizado', 'warning')
  }

}

