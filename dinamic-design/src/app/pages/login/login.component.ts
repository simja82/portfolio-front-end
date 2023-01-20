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
  //Botón Reactivo
  submitted = false;
 
  //Array Banners
  banners : any = [];

  //Array Forms
  forms : any = [];

  //Array Helpers
  helpers : any = [];

  //Array Buttons
  buttons : any = [];

  //Array Phrases
  phrases : any = [];

  //Inyección de Title, Service y Constructor de Formularios
  constructor (private title:Title, private povService:POVService, private formBuilder: FormBuilder) {
    //Seteo de Title
    title.setTitle('Login | Point of View')
  }

  ngOnInit(): void { 
    //Reglas de los Campos del Formulario
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20)
          ]
        ]
      }
    );
    
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.forms = data.forms;
      this.helpers = data.helpers;
      this.buttons = data.buttons;
      this.phrases = data.phrases;
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
    //Inválido
    if (this.form.invalid) {
      return;
    }
    //Valores en Consola
    //console.log(JSON.stringify(this.form.value, null, 2));
  }

}
