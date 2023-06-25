import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

//Models
import { GeneralSocial } from 'src/app/models/generalsocial';
import { AudiovisualSocial } from 'src/app/models/audiovisualsocial';
import { DeveloperSocial } from 'src/app/models/developersocial';

//Services
import { AudiovisualSocialService } from 'src/app/services/audiovisualsocial.service';
import { DeveloperSocialService } from 'src/app/services/developersocial.service';
import { GeneralSocialService } from 'src/app/services/generalsocial.service';

@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html'
})

export class SocialModalComponent implements OnInit {

  //General Social Model
  generalsocial : GeneralSocial [] = [];

  //Audiovisual Social Model
  audiovisualsocial : AudiovisualSocial [] = [];

  //Developer Social Model
  developersocial : DeveloperSocial [] = [];

  /*
  //Array Buttons
  buttons : any = [];
  */

  //Form Group
  form : FormGroup;

  submitted = false;

  /*
  //Array Forms
  forms : any = [];

  //Array Helpers
  helpers : any = [];
  */

  //Inyección de Service, Constructor de Formularios y REST Client
  constructor (private generalsocialService:GeneralSocialService, private audiovisualsocialService:AudiovisualSocialService, private developersocialService:DeveloperSocialService, private formBuilder: FormBuilder, private http: HttpClient) { //private povService:POVService 
    //Reglas de los Campos del Formulario
    this.form = this.formBuilder.group(
      {
        id: [''],        
        icon: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }
    );
  }

  //Traer y Comprobar Datos
  get Icon() {
    return this.form.get("icon");
  }
  get InvalidIcon(){
    return this.Icon?.errors && this.Icon?.touched;
  }
  get ValidIcon(){
    return !this.Icon?.errors && this.Icon?.touched;
  } 

  get Link() {
    return this.form.get("link");
  }
  get InvalidLink(){
    return this.Link?.errors && this.Link?.touched;
  }
  get ValidLink(){
    return !this.Link?.errors && this.Link?.touched;
  }   

  //Listar
  loadSocials(): void{
    this.generalsocialService.getGeneralSocials().subscribe({
      next: (data) => {
        this.generalsocial = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.audiovisualsocialService.getAudiovisualSocials().subscribe({
      next: (data) => {
        this.audiovisualsocial = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.developersocialService.getDeveloperSocials().subscribe({
      next: (data) => {
        this.developersocial = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })        
  }

  //Al Inicio
  ngOnInit() { 

    /*
    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.forms = data.forms;
      this.helpers = data.helpers;      
      this.buttons = data.buttons;
    });
    */

    this.loadSocials();

  }

  //Encontrar
  findGeneralSocial(id: number){
    this.generalsocialService.findGeneralSocial(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
  }

  findAudiovisualSocial(id: number){
    this.audiovisualsocialService.findAudiovisualSocial(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
  }  

  findDeveloperSocial(id: number){
    this.developersocialService.findDeveloperSocial(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
  }  

  //Crear o Editar
  saveGeneralSocial() {
    let item = this.form.value;
    if (item.id == '') {
      this.generalsocialService.saveGeneralSocial(item).subscribe({
        next: (data) => {
          this.onReset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.onSubmit();
      this.onReset();
      this.ngOnInit();
    } else {
      this.generalsocialService.updateGeneralSocial(item.id, item).subscribe({
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

  saveAudiovisualSocial() {
    let item = this.form.value;
    if (item.id == '') {
      this.audiovisualsocialService.saveAudiovisualSocial(item).subscribe({
        next: (data) => {
          this.onReset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.onSubmit();
      this.onReset();
      this.ngOnInit();
    } else {
      this.audiovisualsocialService.updateAudiovisualSocial(item.id, item).subscribe({
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

  saveDeveloperSocial() {
    let item = this.form.value;
    if (item.id == '') {
      this.developersocialService.saveDeveloperSocial(item).subscribe({
        next: (data) => {
          this.onReset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.onSubmit();
      this.onReset();
      this.ngOnInit();
    } else {
      this.developersocialService.updateDeveloperSocial(item.id, item).subscribe({
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

  //Eliminar
  deleteGeneralSocial(id: any) {
    this.generalsocialService.deleteGeneralSocial(id).subscribe(data => {});
    this.alertWithDelete();
    this.ngOnInit();
  }

  deleteAudiovisualSocial(id: any) {
    this.audiovisualsocialService.deleteAudiovisualSocial(id).subscribe(data => {});
    this.alertWithDelete();
    this.ngOnInit();
  }

  deleteDeveloperSocial(id: any) {
    this.developersocialService.deleteDeveloperSocial(id).subscribe(data => {});
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
    Swal.fire('Sí!!!', 'La red social ha sido registrada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La red social no ha sido registrada', 'warning')
  }
  //Sweet Alert Delete
  alertWithDelete(){
    Swal.fire('Bueno...', 'Espero que no te arrepientas... Eliminaste la red social...', 'error')
  }
  
}
