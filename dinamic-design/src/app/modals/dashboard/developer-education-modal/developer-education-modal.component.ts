//Modelo de Lógica para Datos Recorridos con CRUD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  //Form
  form: FormGroup;
  
  //ID
  id?: number;

  //Submitted
  submitted = false;

  //Study
  study: any;

  //Inyección de Services, Constructor de Formularios y REST Client
    constructor (private studyService:StudyService, private formBuilder: FormBuilder, private http: HttpClient) 
    { 
      //Reglas de los Campos del Formulario
      this.form = this.formBuilder.group(
        {
          id: [''],
          image: ['', [Validators.required]],
          title: ['', [Validators.required]],
          institution: ['', [Validators.required]],
          start_date: ['', [Validators.required]],
          end_date: ['', [Validators.required]],
        }
      );
    }

  //Traer y Comprobar Datos
  get Image() {
    return this.form.get("image");
  }
  get InvalidImage(){
    return this.Image?.errors && this.Image?.touched;
  }
  get ValidImage(){
    return !this.Image?.errors && this.Image?.touched;
  } 

  get Title() {
    return this.form.get("title");
  }
  get InvalidTitle(){
    return this.Title?.errors && this.Title?.touched;
  }
  get ValidTitle(){
    return !this.Title?.errors && this.Title?.touched;
  }  

  get Institution() {
    return this.form.get("institution");
  }
  get InvalidInstitution(){
    return this.Institution?.errors && this.Institution?.touched;
  }
  get ValidInstitution(){
    return !this.Institution?.errors && this.Institution?.touched;
  }   

  get StartDate() {
    return this.form.get("start_date");
  }
  get InvalidStartDate(){
    return this.StartDate?.errors && this.StartDate?.touched;
  }
  get ValidStartDate(){
    return !this.StartDate?.errors && this.StartDate?.touched;
  }   

  get EndDate() {
    return this.form.get("end_date");
  }
  get InvalidEndDate(){
    return this.EndDate?.errors && this.EndDate?.touched;
  }
  get ValidEndDate(){
    return !this.EndDate?.errors && this.EndDate?.touched;
  } 

  //Cargar Tabla
  ngOnInit() { 
   this.loadStudies();
  }

  //Cargar Tabla
  loadStudies() {
    this.studyService.getStudies().subscribe({
      next: (data) => {
        this.studies=data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  //Cargar Formulario por ID
  loadStudy(id: number){
    this.studyService.findStudy(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }   
  
  //Guardar o Actualizar
  saveStudy() {
    let study = this.form.value;
    if (study.id == '') {
      this.studyService.saveStudy(study).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.alertWithSuccess();
      this.onSubmit();
      this.ngOnInit();
    } else {
      this.studyService.updateStudy(study.id, study).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.alertWithUpdate();
      this.onSubmit();
      this.ngOnInit();
    }
  }  

  //Enviar Formulario
  onSubmit(): void {
    //Válido
    this.submitted = true;
    //Inválido
    if (this.form.invalid) {
      this.onReset();
    }
  }

  //Resetear Formulario
  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.ngOnInit();
  }

  //Eliminar Dato por ID -- NO FUNCIONA --
  onDelete(id: number){  
    this.studyService.deleteStudy(id).subscribe({
        next: (data) => { },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    });
    this.ngOnInit();
    this.alertWithDelete();
  }

  /*
    this.studyService.deleteStudy(id).subscribe(data => {});
    console.log("Se eliminó correctamente el item");
    this.alertWithDelete();
    this.ngOnInit();
  */

  /*
    this.studyService.deleteStudy(id).subscribe({
        next: (data) => {
          //this.study=data;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se eliminó correctamente el Estudio");
    this.alertWithDelete();
    this.ngOnInit();
  */

  /*
    this.studyService.deleteStudy(id).subscribe(
      data => {
        this.alertWithDelete();
      },
      error => console.log(error)
    );
    this.ngOnInit();
  */

  /* 
    this.studyService.deleteStudy(id).subscribe({
        next: (data) => {
          this.alertWithDelete();
          this.ngOnInit();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    });  
  */   

  //Sweet Alert Success  
  alertWithSuccess(){
    Swal.fire('Sí!!!', 'La educación ha sido creada', 'success')
  }

  alertWithUpdate(){
    Swal.fire('Sí!!!', 'La educación ha sido actualizada', 'success')
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
