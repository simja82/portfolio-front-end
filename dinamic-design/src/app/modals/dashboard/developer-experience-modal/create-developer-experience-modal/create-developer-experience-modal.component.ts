import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-developer-experience-modal',
  templateUrl: './create-developer-experience-modal.component.html'
})
export class CreateDeveloperExperienceModalComponent implements OnInit {

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    image: new FormControl(''),
    position: new FormControl(''),
    place: new FormControl(''),
    starting: new FormControl(''),
    ending: new FormControl(''),
    description: new FormControl(''),
    taskOne: new FormControl(''),
    taskTwo: new FormControl(''),
    taskThree: new FormControl(''),
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
        image: ['', [Validators.required]],
        position: ['', [Validators.required]],
        place: ['', [Validators.required]],
        starting: ['', [Validators.required]],
        ending: ['', [Validators.required]],
        description: ['', [Validators.required]],
        taskOne: ['', [Validators.required]],
        taskTwo: ['', [Validators.required]],
        taskThree: ['', [Validators.required]],
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
    Swal.fire('Sí!!!', 'La experiencia ha sido creada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La experiencia no ha sido creada', 'warning')
  }

}
