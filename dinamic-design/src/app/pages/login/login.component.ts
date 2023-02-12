import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  //Array Login
  login : any = []; 

  //Array Forms
  forms : any = [];

  //Array Helpers
  helpers : any = [];

  //Array Buttons
  buttons : any = [];

  //Inyección de Title, Service y Constructor de Formularios
  constructor (private title:Title, private povService:POVService, private formBuilder: FormBuilder) {
    //Seteo de Title
    title.setTitle('Login | Point of View');
  }

  ngOnInit(): void { 
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#ffffff"; 
      
    //Reglas de los Campos del Formulario
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      }
    );
    
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.login = data.login;
      this.forms = data.forms;
      this.helpers = data.helpers;
      this.buttons = data.buttons;
    });
  }
  
  ngOnDestroy(): void { }

  //Traer Formulario
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //Enviar Formulario
  onSubmit(): void {
    //Válido
    this.submitted = true;
    //Inválido
    if (this.form.invalid) {
      return;
    }
  }

}
