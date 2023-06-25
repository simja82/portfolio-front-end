import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { POVService } from 'src/assets/services/pov.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-banners-modal',
  templateUrl: './banners-modal.component.html'
})
export class BannersModalComponent implements OnInit {

  //Campos Reactivos del Formulario
  banner_form: FormGroup = new FormGroup({
    title: new FormControl(''),
    url: new FormControl(''),
    description: new FormControl(''),
    hero: new FormControl(''),
    subhero: new FormControl(''),
  });

  login_form: FormGroup = new FormGroup({
    url: new FormControl(''),
    description: new FormControl(''),
  });

  submitted = false;

  //Array Banners
  banners : any = [];

  //Array Login
  login : any = [];

  //Array Buttons
  buttons : any = [];

  //Array Helpers
  helpers : any = [];

  //Array Forms
  forms : any = [];

  //Service y Constructor de Formularios
  constructor(private formBuilder: FormBuilder, private povService:POVService) { }  

  ngOnInit(): void { 
    //Reglas de los Campos del Formulario
    this.banner_form = this.formBuilder.group(
      {
        title: ['', [Validators.required]],        
        url: ['', [Validators.required]],
        description: ['', [Validators.required]],
        hero: ['', [Validators.required]],
        subhero: ['', [Validators.required]],
      }
    );

    this.login_form = this.formBuilder.group(
      {       
        url: ['', [Validators.required]],
        description: ['', [Validators.required]],
      }
    );    

    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.login = data.login;
      this.buttons = data.buttons;
      this.helpers = data.helpers;
      this.forms = data.forms;
    })
  }

  //Traer Formulario
  get bf(): { [key: string]: AbstractControl } {
    return this.banner_form.controls;
  }

  get lf(): { [key: string]: AbstractControl } {
    return this.login_form.controls;
  }

  //Enviar Formulario
  onBannerSubmit(): void {
    //Válido
    this.submitted = true;
    this.alertWithSuccess();
    //Inválido
    if (this.banner_form.invalid) {
      this.banner_form.reset();
      this.alertWithWarning();
    }
  }

  onLoginSubmit(): void {
    //Válido
    this.submitted = true;
    this.alertWithSuccess();
    //Inválido
    if (this.login_form.invalid) {
      this.login_form.reset();
      this.alertWithWarning();
    }
  }  

  //Resetear Formulario
  onBannerReset(): void {
    this.submitted = false;
    this.banner_form.reset();
    this.ngOnInit();
  }

  onLoginReset(): void {
    this.submitted = false;
    this.login_form.reset();
    this.ngOnInit();
  }  

  //Sweet Alert Success  
  alertWithSuccess(){
    Swal.fire('Sí!!!', 'El banner ha sido actualizado', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'El banner no ha sido actualizado', 'warning')
  }  

}
