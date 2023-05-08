//Modelo de Lógica para Datos Recorridos con CRUD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

//Models
import { Study } from 'src/app/models/study';

//Services
import { StudyService } from 'src/app/services/study.service';


@Component({
  selector: 'app-developer-education-modal',
  templateUrl: './developer-education-modal.component.html'
})
export class DeveloperEducationModalComponent implements OnInit {

  //Study Model
  studies : Study [] = [];

  //Study Form
  study_form : Study = new Study ("", "", "", "", "");

  //ID
  id? : number;

  //Study Data
  study_data : any;

  //Campos Reactivos del Formulario - Nótese que reemplaza a form: FormGroup;
  form: FormGroup = new FormGroup({
    image: new FormControl(''),
    title: new FormControl(''),
    institution: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
  });
  submitted = false;  

  //Inyección de Services, Constructor de Formularios y Cliente REST
    constructor (private studyService:StudyService, private formBuilder: FormBuilder, private http: HttpClient) 
    { 
      //Reglas de los Campos del Formulario
      this.form = this.formBuilder.group(
        {
          //id: [''],
          image: ['', [Validators.required]],
          title: ['', [Validators.required]],
          institution: ['', [Validators.required]],
          start_date: ['', [Validators.required]],
          end_date: ['', [Validators.required]],
        }
      );
    }
  
  //Traer y Comprobar Datos
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //Llamar a Cargar Tabla y Fila?
  ngOnInit() { 
    //Almacenamiento de datos
    this.studyService.getStudies().subscribe(data => {
      //Información a mostrar
      this.studies = data;
      //this.buttons = data.buttons;
    });
  }

  //Llamar a Cargar Fila por ID
  loadStudy(id: number){
    this.studyService.findStudy(id).subscribe({
        next: (data) => {
          this.study_data=data;
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se cargó correctamente el Estudio");
  }   
  
  //Guardar o Actualizar
  saveStudy() {
    let item = this.form.value;
    if (item.id == '') {
      this.studyService.saveStudy(item).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.onSubmit();
      this.ngOnInit();
    } else {
      this.studyService.updateStudy(item).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.onSubmit();
      this.ngOnInit();
    }
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

  //Eliminar Dato
  /*
  onDelete(id: number){
    this.studyService.deleteStudy(id).subscribe({
        next: (data) => {
          //this.study_data=data;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se eliminó correctamente el Estudio");
    this.alertWithDelete();
    this.ngOnInit();
  }
  */

  
  onDelete(id: number) {
    /*
    this.studyService.deleteStudy(id).subscribe(
      data => {
        this.alertWithDelete();
      },
      error => console.log(error)
    );
    this.ngOnInit();
    */
    
    this.studyService.deleteStudy(id).subscribe({
        next: (data) => {
          this.alertWithDelete();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se eliminó correctamente el Estudio");
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

  //Sweet Alert Delete
  alertWithDelete(){
    Swal.fire('De acuerdo...', 'La educación ha sido eliminada...', 'warning')
  }  
  
}
