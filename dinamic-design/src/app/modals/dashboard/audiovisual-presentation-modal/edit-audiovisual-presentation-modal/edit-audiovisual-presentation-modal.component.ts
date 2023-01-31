import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-audiovisual-presentation-modal',
  templateUrl: './edit-audiovisual-presentation-modal.component.html'
})
export class EditAudiovisualPresentationModalComponent implements OnInit {

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    introOne: new FormControl(''),
    introTwo: new FormControl(''),
    introThree: new FormControl(''),
    iconMinibio: new FormControl(''),
    textMinibio: new FormControl(''),
    iconMyWork: new FormControl(''),
    textMyWork: new FormControl(''),
    iconIWant: new FormControl(''),
    textIWant: new FormControl(''),
    closingOne: new FormControl(''),
    closingTwo: new FormControl(''),
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
        title: ['', [Validators.required]],
        introOne: ['', [Validators.required]],
        introTwo: ['', [Validators.required]],
        introThree: ['', [Validators.required]],
        iconMinibio: ['', [Validators.required]],
        textMinibio: ['', [Validators.required]],
        iconMyWork: ['', [Validators.required]],
        textMyWork: ['', [Validators.required]],
        iconIWant: ['', [Validators.required]],
        textIWant: ['', [Validators.required]],
        closingOne: ['', [Validators.required]],
        closingTwo: ['', [Validators.required]],
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
    Swal.fire('Sí!!!', 'La sección ha sido actualizada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La sección no ha sido actualizada', 'warning')
  }

}
