import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import Swal from 'sweetalert2';

//Models
import { Intro } from 'src/app/models/intro';

//Services
import { IntroService } from 'src/app/services/intro.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-developer-intro-modal',
  templateUrl: './developer-intro-modal.component.html'
})
export class DeveloperIntroModalComponent implements OnInit {

/*
  //Intro Model
  intro: Intro = new Intro("", "", "", "", "");
  id?:number;
  form: FormGroup;

  //Services
  constructor(private introService: IntroService, private formBuilder: FormBuilder) {
    //Reglas de los Campos del Formulario 
    this.form = this.formBuilder.group(
      {
        id: [''],
        overview: ['', [Validators.required]],
        
        industry: ['', [Validators.required]],
        closing: ['', [Validators.required]],
        paragraphOne: ['', [Validators.required]],
        paragraphTwo: ['', [Validators.required]],
        
      }
    );
   }
  
  ngOnInit(): void { 
    this.loadIntro();
  }

  //Traer y Comprobar Datos
  get Overview() {
    return this.form.get("overview");
  }

  get InvalidOverview(){
    return this.Overview?.errors && this.Overview?.touched;
  }

  
  get Industry() {
    return this.form.get("industry");
  }

  get InvalidIndustry(){
    return this.Industry?.errors && this.Industry?.touched;
  }

  get History() {
    return this.form.get("history");
  }

  get InvalidHistory(){
    return this.History?.errors && this.History?.touched;
  }  

  get ParagraphOne() {
    return this.form.get("paragraphOne");
  }

  get InvalidParagraphOne(){
    return this.ParagraphOne?.errors && this.ParagraphOne?.touched;
  }  

  get ParagraphTwo() {
    return this.form.get("paragraphTwo");
  }

  get InvalidParagraphTwo(){
    return this.ParagraphTwo?.errors && this.ParagraphTwo?.touched;
  }  
  

  //Enviar Formulario
  onSubmit(): void {
    //Válido
    this.alertWithSuccess();
    //Inválido
    if (this.form.invalid) {
      this.form.reset();
      this.alertWithWarning();
    }
  }

  //Resetear Formulario
  onReset(): void {
    this.form.reset();
    this.ngOnInit();
  }

  //Sweet Alert Success  
  alertWithSuccess(){
    Swal.fire('Sí!!!', 'La intro ha sido actualizada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La intro no ha sido actualizada', 'warning')
  }

  */

  form: FormGroup;
  intro: Intro = new Intro("");
  id?:number;

  constructor(private http: HttpClient, private servicio: IntroService, private formBuilder: FormBuilder)
    {
      this.form = this.formBuilder.group({
        id: [''],
        overview: ['', [Validators.required]],        
      });
    }
  
  get Overview() {
    return this.form.get("overview");
  }

  get InvalidOverview(){
    return this.Overview?.errors && this.Overview?.touched;
  }

    ngOnInit(): void {
      this.cargarItem();
    }
  
    cargarItem(){
      this.servicio.getById(1).subscribe({
          next: (data) => {
            this.intro=data;
            this.form.setValue(data);
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
      console.log("No carga");
      }
    
    guardarItem() {
      let item = this.form.value;
        this.servicio.updateItem(item).subscribe({
          next: (data) => {
            this.limpiar();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        //window.location.reload();
        console.log("No modifica");
    }
  
    limpiar() {
      console.log("No limpia porque no carga");
      this.form.reset();
    }
  
}
