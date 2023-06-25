import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

//Models
import { Button } from 'src/app/models/button';
import { Divisor } from 'src/app/models/divisor';
import { Helper } from 'src/app/models/helper';
import { Form } from 'src/app/models/form';

//Services
import { ButtonService } from 'src/app/services/button.service';
import { DivisorService } from 'src/app/services/divisor.service';
import { FormService } from 'src/app/services/form.service';
import { HelperService } from 'src/app/services/helper.service';

//import { POVService } from 'src/assets/services/pov.service';


@Component({
  selector: 'app-divisors-modal',
  templateUrl: './divisors-modal.component.html'
})
export class DivisorsModalComponent implements OnInit {

  /*
  //Array Divisors
  divisors : any = [];

  //Array Forms
  forms : any = [];

  //Array Helpers
  helpers : any = [];  

  //Array Buttons
  buttons : any = [];    
  */

  //Divisor Model
  divisors : Divisor [] = [];  

  //Form Model
  forms : Form [] = []; 

  //Helper Model
  helpers : Helper [] = []; 
  
  //Button Model
  buttons : Button [] = [];   

  //Form
  form: FormGroup;
  
  //ID
  id?: number;

  //Submitted
  submitted = false;

  //Divisor Data -- ESTO VA EN EL HTML --
  divisor_data: any;
  
  /*
  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
  });
  submitted = false;
  */

  //Inyección de Services, Constructor de Formularios y REST Client
  constructor (private divisorService:DivisorService, private formService:FormService, private helperService:HelperService, private buttonService:ButtonService, private formBuilder: FormBuilder, private http: HttpClient) 
  { 
      //Reglas de los Campos del Formulario
      this.form = this.formBuilder.group(
        {
          //id: [''],
          title: ['', [Validators.required]],
        }
      );
  }

  //Traer y Comprobar Datos
  get Title() {
    return this.form.get("title");
  }
  get InvalidTitle(){
    return this.Title?.errors && this.Title?.touched;
  }
  get ValidTitle(){
    return !this.Title?.errors && this.Title?.touched;
  }  

  //Cargar Tabla
  ngOnInit() { 
    this.loadDivisors();
  }

   //Cargar Datos Divisors
   loadDivisors() {
    this.divisorService.getDivisors().subscribe({
      next: (data) => {
      this.divisors=data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formService.getForms().subscribe({
      next: (data) => {
      this.forms=data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.helperService.getHelpers().subscribe({
      next: (data) => {
      this.helpers=data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.buttonService.getButtons().subscribe({
      next: (data) => {
      this.buttons=data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })        
  }  

  /*
  ngOnInit(): void { 

    //Reglas de los Campos del Formulario
    this.form = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
      }
    );

    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.divisors = data.divisors;
      this.forms = data.forms;
      this.helpers = data.helpers;
      this.buttons = data.buttons;      
    })
  }
  */

  //Cargar Formulario por ID
  loadDivisor(id: number){
    this.divisorService.findDivisor(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }  

  /*
  //Traer Formulario
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  */

  //Guardar o Actualizar
  saveDivisor() {
    let divisor = this.form.value;
    if (divisor.id == '') {
      this.divisorService.saveDivisor(divisor).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    } else {
      this.divisorService.updateDivisor(divisor.id, divisor).subscribe({
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
  
  //Sweet Alert Update
  alertWithUpdate(){
    Swal.fire('Sí!!!', 'El divisor ha sido actualizado', 'success')
  } 

}
