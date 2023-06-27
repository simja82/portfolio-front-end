//Modelo de Lógica para Datos Simples con CRUD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

//Models
import { Intro } from 'src/app/models/intro';

//Services
import { IntroService } from 'src/app/services/intro.service';

@Component({
  selector: 'app-developer-intro-modal',
  templateUrl: './developer-intro-modal.component.html'
})
export class DeveloperIntroModalComponent implements OnInit {

  //Intro Model
  intro: Intro = new Intro("", "", "", "", "");

  //Form
  form: FormGroup;
  
  //ID
  id?: number;

  //Submitted
  submitted = false;

  //Intro Data -- AL HTML --
  intro_data: any;

  //Inyección de Service, Constructor de Formularios
  constructor
  (
    private introService: IntroService, 
    private formBuilder: FormBuilder
  ) 
  {  
    //Reglas de los Campos del Formulario 
    this.form = this.formBuilder.group(
      {
        id: [''],
        overview: ['', [Validators.required]],
        industry: ['', [Validators.required]],
        history: ['', [Validators.required]],
        line_one: ['', [Validators.required]],
        line_two: ['', [Validators.required]],  
      }
    );
  }

  //Traer y Comprobar Datos
  get Overview() {
    return this.form.get("overview");
  }
  get InvalidOverview(){
    return this.Overview?.errors && this.Overview?.touched;
  }
  get ValidOverview(){
    return !this.Overview?.errors && this.Overview?.touched;
  }

  get Industry() {
    return this.form.get("industry");
  }
  get InvalidIndustry(){
    return this.Industry?.errors && this.Industry?.touched;
  }
  get ValidIndustry(){
    return !this.Industry?.errors && this.Industry?.touched;
  }

  get History() {
    return this.form.get("history");
  }
  get InvalidHistory(){
    return this.History?.errors && this.History?.touched;
  }
  get ValidHistory(){
    return !this.History?.errors && this.History?.touched;
  }
  
  get LineOne() {
    return this.form.get("line_one");
  }
  get InvalidLineOne(){
    return this.LineOne?.errors && this.LineOne?.touched;
  }
  get ValidLineOne(){
    return !this.LineOne?.errors && this.LineOne?.touched;
  }
  
  get LineTwo() {
    return this.form.get("line_two");
  }
  get InvalidLineTwo(){
    return this.LineTwo?.errors && this.LineTwo?.touched;
  }
  get ValidLineTwo(){
    return !this.LineTwo?.errors && this.LineTwo?.touched;
  }  

  //Al Inicio
  ngOnInit() { 
    this.loadIntro();
  }

  //Cargar un Dato -- FIND --
  loadIntro(){
    this.introService.findIntro(1).subscribe({
        next: (data) => {
          this.intro = data;
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  } 

  //Guardar o Actualizar
  saveIntro() {
    let item = this.form.value;
    if (item.id == '') {
      this.introService.saveIntro(item).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    } else {
      this.introService.updateIntro(item).subscribe({
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
    this.alertWithUpdate();
    //Inválido
    if (this.form.invalid) {
      this.onReset();
      this.alertWithError();
    }
  }

  //Resetear Formulario
  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.ngOnInit();
  }

  //Sweet Alert With Success
  alertWithUpdate(){
    Swal.fire('Sí!!!', 'La educación ha sido actualizada', 'success')
  }  

  //Sweet Alert With Error
  alertWithError(){
    Swal.fire('Ooops!!!', 'Ha habido un error', 'error')
  }   

}
