//Modelo de Service para Datos Recorridos
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Study } from '../models/study';

@Injectable({
  providedIn: 'root'
})

export class StudyService {

  url= 'http://localhost:8080/study'; 
  //url= 'https://pointofview.onrender.com/study';

  constructor(private http:HttpClient) { }

  //Listar
  public getStudies(): Observable<Study[]> {
    return this.http.get<Study[]>(this.url + '/list');
  }

  //Encontrar
  public findStudy(id: number): Observable<Study> {
    return this.http.get<Study>(this.url + `/find/${id}`); 
  }
 

  //Crear
   public saveStudy(study: Study): Observable<any> {
    return this.http.post<any>(this.url + '/new', study); 
  } 

  //Editar
  public updateStudy(id:number, study: Study): Observable<any> {
    return this.http.put<any>(this.url + `/update/${id}`, study);    
  }  

  //Eliminar
  /*
  public deleteStudy(id: number): Observable<Study> {
    return this.http.delete<Study>(this.url + `/delete/${id}`); 
  } 
  */
 
  /*
  public deleteStudy(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/delete/${id}`); 
  }   
  */

  public deleteStudy(id:number): Observable<any> {
    return this.http.delete(this.url + `/delete/${id}`);    
  } 

}
