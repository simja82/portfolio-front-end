import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

//Models
import { DeveloperProfile } from 'src/app/models/developer_profile';

//Services
import { AccountService } from 'src/app/services/account.service';
import { DeveloperProfileService } from 'src/app/services/developer_profile.service';

@Component({
  selector: 'app-developer-profile-modal',
  templateUrl: './developer-profile-modal.component.html'
})
export class DeveloperProfileModalComponent implements OnInit {

  //Profile Model
  developer_profile: DeveloperProfile = new DeveloperProfile ("", "", "", "", "", "", "", "", "");

  //Form
  form: FormGroup;
  
  //ID
  id?: number;

  //Submitted
  submitted = false;

  //Profile -- ESTO VA EN EL HTML --
  profile: any;  
  
  //Inyección de Services, Constructor de Formularios y REST Client
  constructor(private accountService:AccountService, private developerprofileService:DeveloperProfileService, private formBuilder: FormBuilder, private http: HttpClient) 
  { 
    //Reglas de los Campos del Formulario
    this.form = this.formBuilder.group(
      {
        id: [''],
        icon: ['', [Validators.required]],
        title: ['', [Validators.required]],
        //name_intro: ['', [Validators.required]],
        //fullname: ['', [Validators.required]],
        //line_one: ['', [Validators.required]],
        //photo: ['', [Validators.required]],
        //phrase_one: ['', [Validators.required]],
        //phrase_two: ['', [Validators.required]],
        //author: ['', [Validators.required]],
        //credit: ['', [Validators.required]],
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

  get Title() {
    return this.form.get("title");
  }
  get InvalidTitle(){
    return this.Title?.errors && this.Title?.touched;
  }
  get ValidTitle(){
    return !this.Title?.errors && this.Title?.touched;
  }  

  get NameIntro() {
    return this.form.get("name_intro");
  }
  get InvalidNameIntro(){
    return this.NameIntro?.errors && this.NameIntro?.touched;
  }
  get ValidNameIntro(){
    return !this.NameIntro?.errors && this.NameIntro?.touched;
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

  //Credit
  get Credit() {
    return this.form.get("credit");
  }
  get InvalidCredit(){
    return this.Credit?.errors && this.Credit?.touched;
  }
  get ValidCredit(){
    return !this.Credit?.errors && this.Credit?.touched;
  }

  //Llamar a Cargar Datos -- READ --
  ngOnInit(): void { 
    this.loadProfileData();    
  }

  //Cargar Datos Developer Profile -- READ --
  loadProfileData(){
  this.developerprofileService.findDeveloperProfile(1).subscribe({
      next: (data) => {
        this.developer_profile = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  //Llamar a Cargar Formulario Completo -- UPDATE --
  /*
  loadProfile(){
    this.loadSection(id);
    this.loadDeveloperProfile(id);
  } 

  //Cargar Formulario Section -- UPDATE --
  loadSection(id: number){
    this.sectionService.findSection(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  } 
 */

  //Cargar Formulario Developer Profile -- UPDATE --
  loadDeveloperProfile(id: number){
    this.developerprofileService.findDeveloperProfile(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  } 



  loadProfile(id: number){
      this.developerprofileService.findDeveloperProfile(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });

  }




  saveProfile(){
    this.saveDeveloperProfile();
  }
 



  //Guardar o Actualizar Developer Profile -- CREATE / UPDATE --
  saveDeveloperProfile() {
    let developerprofile = this.form.value;
    if (developerprofile.id == '') {
      this.developerprofileService.saveDeveloperProfile(developerprofile).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    } else {
      this.developerprofileService.updateDeveloperProfile(developerprofile).subscribe({
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

  /*
  //MODELO -- CREATE / UPDATE --
  saveDeveloperProfile2() {
    let section = this.form.value;
    if (section.id == '') {
      this.developerprofileService.saveDeveloperProfile(section).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      //VA DESDE ACÁ
      this.sectionService.saveSection(section).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });      
      //Y HASTA LA LÍNEA DE ARRIBA DE ESTA
    } else {
      this.sectionService.updateSection(section.id, section).subscribe({
        next: (data) => {
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      this.developerprofileService.updateDeveloperProfile(developerprofile).subscribe({
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
  */

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

  //Sweet Alert Success  
  alertWithUpdate(){
    Swal.fire('Sí!!!', 'El perfil ha sido actualizado', 'success')
  }  

  alertWithError(){
    Swal.fire('Ooops!!!', 'Ha habido un error', 'error')
  }
  
}
