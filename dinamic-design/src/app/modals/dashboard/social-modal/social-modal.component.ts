import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

//Models
import { GeneralSocial } from 'src/app/models/generalsocial';
import { AudiovisualSocial } from 'src/app/models/audiovisualsocial';
import { DeveloperSocial } from 'src/app/models/developersocial';
import { Forms } from 'src/app/models/form';
import { Button } from 'src/app/models/button';
import { Helper } from 'src/app/models/helper';

//Services
import { AudiovisualSocialService } from 'src/app/services/audiovisualsocial.service';
import { DeveloperSocialService } from 'src/app/services/developersocial.service';
import { GeneralSocialService } from 'src/app/services/generalsocial.service';
import { FormService } from 'src/app/services/form.service';
import { ButtonService } from 'src/app/services/button.service';
import { HelperService } from 'src/app/services/helper.service';

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

  //Forms Model
  icon_form : Forms = new Forms ("");
  link_form : Forms = new Forms ("");

  //Helpers
  icon_helper : Helper = new Helper ("");
  link_helper : Helper = new Helper ("");  

  //Buttons
  close_button : Button = new Button ("");
  save_button : Button = new Button ("");

  //Form Group
  form : FormGroup;

  //Submitted
  submitted = false;

  //Inyección de Service, Constructor de Formularios y REST Client
  constructor 
    (
    private generalsocialService:GeneralSocialService, 
    private audiovisualsocialService:AudiovisualSocialService, 
    private developersocialService:DeveloperSocialService, 
    private formsService:FormService, 
    private helpersService:HelperService, 
    private buttonsService:ButtonService, 
    private formBuilder: FormBuilder 
    ) 
    { 
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

  loadComplements(): void{
    this.formsService.findForm(2).subscribe({
      next: (data) => {
        this.icon_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(3).subscribe({
      next: (data) => {
        this.link_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });    
    this.helpersService.findHelper(2).subscribe({
      next: (data) => {
        this.icon_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(3).subscribe({
      next: (data) => {
        this.link_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });     
    this.buttonsService.findButton(7).subscribe({
      next: (data) => {
        this.close_button = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.buttonsService.findButton(11).subscribe({
      next: (data) => {
        this.save_button = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });    
  }  

  //Al Inicio
  ngOnInit() {
    this.loadSocials();
    this.loadComplements();     
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
