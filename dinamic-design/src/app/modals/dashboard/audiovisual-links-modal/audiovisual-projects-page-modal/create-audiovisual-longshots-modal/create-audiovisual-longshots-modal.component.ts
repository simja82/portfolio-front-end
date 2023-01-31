import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-audiovisual-longshots-modal',
  templateUrl: './create-audiovisual-longshots-modal.component.html'
})
export class CreateAudiovisualLongshotsModalComponent implements OnInit {

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    duration: new FormControl(''),
    image: new FormControl(''),
    stage: new FormControl(''),
    genre: new FormControl(''),
    logline: new FormControl(''),
    storylineOne: new FormControl(''),
    storylineTwo: new FormControl(''),
    storylineThree: new FormControl(''),
    synopsisOne: new FormControl(''),
    synopsisTwo: new FormControl(''),
    synopsisThree: new FormControl(''),
    synopsisFour: new FormControl(''),
    synopsisFive: new FormControl(''),
    synopsisSix: new FormControl(''),
    synopsisSeven: new FormControl(''),
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
        duration: ['', [Validators.required]],
        image: ['', [Validators.required]],
        stage: ['', [Validators.required]],
        genre: ['', [Validators.required]],
        logline: ['', [Validators.required]],
        storylineOne: ['', [Validators.required]],
        storylineTwo: ['', [Validators.required]],
        storylineThree: ['', [Validators.required]],
        synopsisOne: ['', [Validators.required]],
        synopsisTwo: ['', [Validators.required]],
        synopsisThree: ['', [Validators.required]],
        synopsisFour: ['', [Validators.required]],
        synopsisFive: ['', [Validators.required]],
        synopsisSix: ['', [Validators.required]],
        synopsisSeven: ['', [Validators.required]],
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
    Swal.fire('Sí!!!', 'El Longshot ha sido creado', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'El Longshot no ha sido creado', 'warning')
  }

}
