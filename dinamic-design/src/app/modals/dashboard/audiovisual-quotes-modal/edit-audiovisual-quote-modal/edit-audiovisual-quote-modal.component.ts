import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-audiovisual-quote-modal',
  templateUrl: './edit-audiovisual-quote-modal.component.html'
})
export class EditAudiovisualQuoteModalComponent implements OnInit {

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    icon: new FormControl(''),
    author: new FormControl(''),
    credit: new FormControl(''),
    phraseOne: new FormControl(''),
    phraseTwo: new FormControl(''),
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
        icon: ['', [Validators.required]],
        author: ['', [Validators.required]],
        credit: ['', [Validators.required]],
        phraseOne: ['', [Validators.required]],
        phraseTwo: ['', [Validators.required]],
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
    Swal.fire('Sí!!!', 'La frase ha sido editada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La frase no ha sido editada', 'warning')
  }

}
