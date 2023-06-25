import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  //Study Model -- ES DISTINTA LA FORMA SIN RECORRIDO --
  studies : Study [] = [];

  //Form
  form: FormGroup;

  //Submitted
  submitted = false;

  //Inyección de Service, Constructor de Formularios y REST Client
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

  //Listar
  loadStudies(): void {
    this.studyService.getStudies().subscribe({
      next: (data) => {
      this.studies = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  //Al Inicio
  ngOnInit(): void { 
    this.loadStudies();
  }  
 
  //Encontrar
  findStudy(id: number){
    this.studyService.findStudy(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  } 

  //Crear o Editar
  saveStudy() {
    let item = this.form.value;
    if (item.id == '') {
      this.studyService.saveStudy(item).subscribe({
        next: (data) => {
          this.onReset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.onSubmit();
      this.onReset();
      this.ngOnInit();;
    } else { 
      this.studyService.updateStudy(item.id, item).subscribe({
        next: (data) => {
          this.onReset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.onSubmit();
      this.onReset();
      this.ngOnInit();
    }
  }

  //Eliminar -- PROBANDO CON FORMATO NUEVO
  deleteStudy(id: any) {
    this.studyService.deleteStudy(id).subscribe({
      next: (data) => {
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.alertWithDelete();
    this.ngOnInit();
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
    Swal.fire('Sí!!!', 'La educación ha sido creada', 'success')
  }

  //Sweet Alert Update
  alertWithUpdate(){
    Swal.fire('Sí!!!', 'La educación ha sido actualizada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La educación no ha sido registrada', 'warning')
  }

  //Sweet Alert Delete
  alertWithDelete(){
    Swal.fire('De acuerdo...', 'La educación ha sido eliminada...', 'warning')
  } 

  //Sweet Alert With Error
  alertWithError(){
    Swal.fire('Ooops!!!', 'Ha habido un error', 'error')
  } 
  
}
