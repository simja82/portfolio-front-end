import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

//Models
import { DeveloperProfile } from 'src/app/models/developerprofile';
import { Button } from 'src/app/models/button';
import { Forms } from 'src/app/models/form';
import { Helper } from 'src/app/models/helper';

//Services
import { DeveloperProfileService } from 'src/app/services/developer_profile.service';
import { ButtonService } from 'src/app/services/button.service';
import { FormService } from 'src/app/services/form.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-developer-profile-modal',
  templateUrl: './developer-profile-modal.component.html'
})
export class DeveloperProfileModalComponent implements OnInit {

  //Profile Model
  developer_profile: DeveloperProfile = new DeveloperProfile ("", "", "", "", "", "", "", "");

  //Title Model -- PROVISORIO PARA QUE NO TIRE ERROR
  title: any; 

  //Forms Model
  overview_form : Forms = new Forms ("");
  fullname_form : Forms = new Forms ("");
  line_one_form : Forms = new Forms ("");
  photo_form : Forms = new Forms ("");
  phrase_form : Forms = new Forms ("");
  one_form : Forms = new Forms ("");
  two_form : Forms = new Forms ("");
  author_form : Forms = new Forms ("");
  credit_form : Forms = new Forms ("");

  //Helpers
  overview_helper : Helper = new Helper ("");
  fullname_helper : Helper = new Helper ("");  
  line_one_helper : Helper = new Helper ("");  
  max_100_helper : Helper = new Helper ("");  
  photo_helper : Helper = new Helper ("");  
  phrase_helper : Helper = new Helper ("");
  author_helper : Helper = new Helper (""); 
  credit_helper : Helper = new Helper (""); 

  //Buttons
  close_button : Button = new Button ("");
  save_button : Button = new Button ("");  

  //Form
  form: FormGroup;
  
  //ID
  id?: number;

  //Submitted
  submitted = false;

  //Profile Data -- AL HTML --
  profile_data: any;  
  
  //Inyección de Services, Constructor de Formularios y REST Client
  constructor
  (
    private developerprofileService:DeveloperProfileService, 
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
        overview: ['', [Validators.required]],
        fullname: ['', [Validators.required]],
        line_one: ['', [Validators.required]],
        photo: ['', [Validators.required]],
        phrase_one: ['', [Validators.required]],
        phrase_two: ['', [Validators.required]],
        author: ['', [Validators.required]],
        credit: ['', [Validators.required]],
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

  get Fullname() {
    return this.form.get("fullname");
  }
  get InvalidFullname(){
    return this.Fullname?.errors && this.Fullname?.touched;
  }
  get ValidFullname(){
    return !this.Fullname?.errors && this.Fullname?.touched;
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

  get Photo() {
    return this.form.get("photo");
  }
  get InvalidPhoto(){
    return this.Photo?.errors && this.Photo?.touched;
  }
  get ValidPhoto(){
    return !this.Photo?.errors && this.Photo?.touched;
  }

  get PhraseOne() {
    return this.form.get("phrase_one");
  }
  get InvalidPhraseOne(){
    return this.PhraseOne?.errors && this.PhraseOne?.touched;
  }
  get ValidPhraseOne(){
    return !this.PhraseOne?.errors && this.PhraseOne?.touched;
  }

  get PhraseTwo() {
    return this.form.get("phrase_two");
  }
  get InvalidPhraseTwo(){
    return this.PhraseTwo?.errors && this.PhraseTwo?.touched;
  }
  get ValidPhraseTwo(){
    return !this.PhraseTwo?.errors && this.PhraseTwo?.touched;
  }

  get Author() {
    return this.form.get("author");
  }
  get InvalidAuthor(){
    return this.Author?.errors && this.Author?.touched;
  }
  get ValidAuthor(){
    return !this.Author?.errors && this.Author?.touched;
  }

  get Credit() {
    return this.form.get("credit");
  }
  get InvalidCredit(){
    return this.Credit?.errors && this.Credit?.touched;
  }
  get ValidCredit(){
    return !this.Credit?.errors && this.Credit?.touched;
  }

  //Listar
  loadProfile(){
  this.developerprofileService.findDeveloperProfile(1).subscribe({
      next: (data) => {
        this.developer_profile = data;
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  loadComplements(): void{
    this.formsService.findForm(50).subscribe({
      next: (data) => {
        this.overview_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });   
    this.formsService.findForm(12).subscribe({
      next: (data) => {
        this.fullname_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(29).subscribe({
      next: (data) => {
        this.line_one_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(27).subscribe({
      next: (data) => {
        this.photo_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(17).subscribe({
      next: (data) => {
        this.phrase_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(18).subscribe({
      next: (data) => {
        this.one_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(19).subscribe({
      next: (data) => {
        this.two_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(15).subscribe({
      next: (data) => {
        this.author_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.formsService.findForm(11).subscribe({
      next: (data) => {
        this.credit_form = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });   
    this.helpersService.findHelper(43).subscribe({
      next: (data) => {
        this.overview_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(41).subscribe({
      next: (data) => {
        this.fullname_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(28).subscribe({
      next: (data) => {
        this.line_one_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(24).subscribe({
      next: (data) => {
        this.max_100_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(22).subscribe({
      next: (data) => {
        this.photo_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(45).subscribe({
      next: (data) => {
        this.phrase_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(15).subscribe({
      next: (data) => {
        this.author_helper = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }); 
    this.helpersService.findHelper(11).subscribe({
      next: (data) => {
        this.credit_helper = data;
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
    this.loadProfile(); 
    this.loadComplements();     
  }  

  //Encontrar
  findDeveloperProfile(id: number){
    this.developerprofileService.findDeveloperProfile(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
  }  

  //Crear o Editar
  saveDeveloperProfile() {
    let item = this.form.value;
    if (item.id == '') {
      this.developerprofileService.saveDeveloperProfile(item).subscribe({
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
      this.developerprofileService.updateDeveloperProfile(item).subscribe({
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
    Swal.fire('Sí!!!', 'El perfil ha sido registrado', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'El perfil no ha sido registrado', 'warning')
  }
  
}
