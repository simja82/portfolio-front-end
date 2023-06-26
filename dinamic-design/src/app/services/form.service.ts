//Modelo de Service para Datos Recorridos
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../models/form';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  //url= 'http://localhost:8080/form'; 
  url= 'https://pointofview-dy8a.onrender.com/form';

  constructor(private http:HttpClient) { }

  //Listar
  public getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.url + '/list');
  }

  //Encontrar
  public findForm(id: number): Observable<Form> {
    return this.http.get<Form>(this.url + `/find/${id}`); 
  }
 

  //Crear
   public saveForm(form: Form): Observable<any> {
    return this.http.post<any>(this.url + '/new', form); 
  } 

  //Editar
  public updateForm(id:number, form: Form): Observable<any> {
    return this.http.put<any>(this.url + `/update/${id}`, form);    
  }  

  //Eliminar
  public deleteForm(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/delete/' + id); 
  }   

}
