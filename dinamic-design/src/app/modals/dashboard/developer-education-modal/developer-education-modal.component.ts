import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Study } from 'src/app/models/study';
import { StudyService } from 'src/app/services/study.service';
import Swal from 'sweetalert2';
//import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-developer-education-modal',
  templateUrl: './developer-education-modal.component.html'
})
export class DeveloperEducationModalComponent implements OnInit {

  /*
  //Array Studies
  studies : any = [];

  //Array Buttons
  buttons : any = [];
  */

  studies : Study [] = [];

  id? : number;

  item : any;

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    image: new FormControl(''),
    title: new FormControl(''),
    institution: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
  });
  submitted = false;  

  //Inyección de Service
    constructor (private formBuilder: FormBuilder, private studyService:StudyService) 
    { 
      //Reglas de los Campos del Formulario
      this.form = this.formBuilder.group(
        {
          image: ['', [Validators.required]],
          title: ['', [Validators.required]],
          institution: ['', [Validators.required]],
          start_date: ['', [Validators.required]],
          end_date: ['', [Validators.required]],
        }
      );
    }
  
  ngOnInit(): void { 
    //Almacenamiento de datos
    this.studyService.getStudies().subscribe(data => {
      //Información a mostrar
      this.studies = data;
      //this.buttons = data.buttons;
    })
  }

  cargarItem(id: number){
    this.studyService.findStudy(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se cargó correctamente el estudio");
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
      this.onReset();
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
    Swal.fire('Sí!!!', 'La educación ha sido creada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La educación no ha sido creada', 'warning')
  }

  //Sweet Alert Cancel
  alertWithCancel(){
    Swal.fire('Bueno...', 'La educación no ha sido eliminada', 'error')
  }  

}
