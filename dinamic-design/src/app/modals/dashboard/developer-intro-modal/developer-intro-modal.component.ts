/*
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';

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

  /--*
   //Array Forms
   intro : any = [];
  *--/

  //Intro Model
  intro?: Intro[];

  //Combinación de Modelos por el momento no la uso
  blendedData: any;  


  //Model Form?
  intro_data: Intro[]=[];

  //Y esto?
  item: any;

  //ID por el momento no se usa..
  id?:number;

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    overview: new FormControl(''),
    industry: new FormControl(''),
    history: new FormControl(''),
    line_one: new FormControl(''),
    line_two: new FormControl(''),
  });
  submitted = false;  

  //Inyección del Service y Constructor de Formularios
  constructor(private introService: IntroService, private formBuilder: FormBuilder, private http: HttpClient) 
  {  
    //ACÁ VIENEN POR UN RATO LOS VALIDATORS PARA PROBAR
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

  //ESTO QUE HARÍA?
  listarItems(): void{
    this.introService.getIntros().subscribe({
      next: (data) => {
        this.intro_data=data;
        console.log("Items cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
}
  
  //ASÍ SERÍA EL FORMATO ORIGINAL MODIFICADO... ESTE NO ES void, EL OTRO ES void...
  ngOnInit() { 
    //Traer la información a la vista previa
    this.introService.findIntro(1).subscribe((data) => {
      this.intro = data;
      this.dataPooling();
    });
    /--*
    //SACO LOS VALIDATORS DE ACÁ PARA PROBARLOS EN EL CONSTRUCTOR...
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
    *--/
    this.listarItems();
  }

  //Combinación de Datos
  dataPooling() {
    if (this.intro) {
      // Combinación de datos
      this.blendedData = {
        intro: this.intro
      };
    }
  }

  //Traer Formulario
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  cargarItem(id: number){
    this.introService.findIntro(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se cargó correctamente el item?");
    }

    guardarItem() {
      let item = this.form.value;
      if (item.id === '1') {
        this.introService.updateIntro(1, item).subscribe({
          next: (data) => {
            this.onReset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        console.log("Se añadió correctamente el item");
        this.alertWithSuccess();
        //ESTO DE ARRIBA PARA GUARDAR UNO NUEVO PERO ACÁ NO LO VOY A USAR ENTONCES?
      } 
    } 

    /--*
    guardarItem() {
      let item = this.form.value;
      if (item.id == '') {
        this.introService.saveIntro(item).subscribe({
          next: (data) => {
            this.onReset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        //window.location.reload();
        console.log("Se añadió correctamente el item");
        this.alertWithSuccess();
        //ESTO DE ARRIBA PARA GUARDAR UNO NUEVO PERO ACÁ NO LO VOY A USAR ENTONCES?
      } else {
        this.introService.updateIntro(item).subscribe({
          next: (data) => {
            this.onReset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        //window.location.reload();
        console.log("Se modificó correctamente el item");
        this.alertWithSuccess();
        //ESTO DE ARRIBA ES PARA ACTUALIZAR PERO NO VA POR ID ENTONCES?
        //Y, SE LE PUEDE SACAR EL windows.location.reload() Y QUE MUESTRE EL SweetAlert?
      }
    } 
    *--/   

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
    Swal.fire('Sí!!!', 'La intro ha sido actualizada', 'success')
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('Nope!!!', 'La intro no ha sido actualizada', 'warning')
  }

}

*/

//ACA TODO LO QUE RECOLECTÉ PARA PROBAR
/*
  ngOnInit(): void { 
    this.loadIntro();
  }
  
  loadIntro(){
  this.introService.findIntro(1).subscribe({
      next: (data) => {
        this.intro=data;
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  console.log("No carga");
  }

  //PASOS A CUBRIR
  //Traer y Mostrar Datos
  //Encontrar por id y precargar el Formulario
  //Actualizar el Formulario
  //Resetear el Formulario

  //Traer y Comprobar Datos --para hacerlo hay que modificar el front-end
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
    return this.form.get("line_one");
  }

  get InvalidParagraphOne(){
    return this.ParagraphOne?.errors && this.ParagraphOne?.touched;
  }  

  get ParagraphTwo() {
    return this.form.get("line_two");
  }

  get InvalidParagraphTwo(){
    return this.ParagraphTwo?.errors && this.ParagraphTwo?.touched;
  }  

  //ESTOS SON OTROS MÉTODOS QUE TENGO QUE PROBAR...
  cargarItem(){
    this.servicio.findIntro(1).subscribe({
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
      this.servicio.updateIntro(item).subscribe({
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
  
*/


//ESTO DICE CHAT GPT
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

  //Intro Model
  intro?: Intro [];

  //Combinación de Modelos
  blendedData: any;  

  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    overview: new FormControl('', [Validators.required]),
    industry: new FormControl('', [Validators.required]),
    history: new FormControl('', [Validators.required]),
    line_one: new FormControl('', [Validators.required]),
    line_two: new FormControl('', [Validators.required]),
  });
  submitted = false;  

  //Inyección del Service y Constructor de Formularios
  constructor(private introService: IntroService, private formBuilder: FormBuilder, private http: HttpClient) 
  {  }

  ngOnInit() { 
    /*
    this.introService.getIntros().subscribe({
      next: (response: Intro[]) => {
        this.intro = response[1]; // Cambiar esta línea
        this.form.patchValue(this.intro);
      },
      error: (e) => {
        console.error(e);
      }
    });
    */
    //Traer la información a la vista previa
    /*
    this.introService.findIntro(1).subscribe({
      next: (response: Intro[]) => {
        this.intro = response[1]; // Cambiar esta línea
        this.form.patchValue(this.intro);
      }      

    });
    */
    this.introService.findIntro(1).subscribe((data) => {
      this.intro = data;
      this.dataPooling();
    });   
    
    //SACO LOS VALIDATORS DE ACÁ PARA PROBARLOS EN EL CONSTRUCTOR...
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
   
   //this.listarItems();
  }

  //Combinación de Datos
  dataPooling() {
    if (this.intro) {
      // Combinación de datos
      this.blendedData = {
        intro: this.intro
      };
    }
  }

  //Traer Formulario
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //Enviar Formulario

  onSubmit() {
    //Válido
    //Si es valido
    this.submitted = true;
    //Entonces
    //this.introService.updateIntro(this.form.value).subscribe((data) =>{});
    //Alerta
    this.alertWithSuccess();
    //Inválido
    if (this.form.invalid) {
      this.alertWithWarning();
      return;
    }

    let item = this.form.value;

    
    // Si hay una intro guardada previamente, actualiza sus datos
    if (this.intro) {
      item.id = this.intro;
      this.introService.updateIntro(item).subscribe({
        next: () => {
          this.onSubmit();
        },
        error: (e) => {
          console.error(e);
          this.onSubmit();
        }
      });
    }
    // Si no hay una intro guardada previamente, crea una nueva
    else {
      this.introService.saveIntro(item).subscribe({
        next: () => {
          this.onSubmit();
          this.form.reset();
        },
        error: (e) => {
          console.error(e);
          this.onSubmit();
        }
      });
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
    Swal.fire('¡Sí!', 'La intro ha sido actualizada', 'success');
  }

  //Sweet Alert Warning
  alertWithWarning(){
    Swal.fire('¡Nope!', 'La intro no ha sido actualizada', 'warning');
  }



}
