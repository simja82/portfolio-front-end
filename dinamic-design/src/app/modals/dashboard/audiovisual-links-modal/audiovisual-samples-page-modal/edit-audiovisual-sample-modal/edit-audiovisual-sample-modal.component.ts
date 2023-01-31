import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-audiovisual-sample-modal',
  templateUrl: './edit-audiovisual-sample-modal.component.html'
})
export class EditAudiovisualSampleModalComponent implements OnInit {

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
    format: new FormControl(''),
    genre: new FormControl(''),
    logline: new FormControl(''),
    documentOne: new FormControl(''),
    draftOne: new FormControl(''),
    yearOne: new FormControl(''),
    fileOne: new FormControl(''),
    documentTwo: new FormControl(''),
    draftTwo: new FormControl(''),
    yearTwo: new FormControl(''),
    fileTwo: new FormControl(''),
    documentThree: new FormControl(''),
    draftThree: new FormControl(''),
    yearThree: new FormControl(''),
    fileThree: new FormControl(''),


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
        image: ['', [Validators.required]],
        format: ['', [Validators.required]],
        genre: ['', [Validators.required]],
        logline: ['', [Validators.required]],
        documentOne: ['', [Validators.required]],
        draftOne: ['', [Validators.required]],
        yearOne: ['', [Validators.required]],
        fileOne: ['', [Validators.required]], 
        documentTwo: ['', [Validators.required]],
        draftTwo: ['', [Validators.required]], 
        yearTwo: ['', [Validators.required]],
        fileTwo: ['', [Validators.required]],
        documentThree: ['', [Validators.required]],       
        draftThree: ['', [Validators.required]],
        yearThree: ['', [Validators.required]],
        fileThree: ['', [Validators.required]],
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
    Swal.fire('Sí!!!', 'La Muestra ha sido editada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La Muestra no ha sido editada', 'warning')
  }

}
