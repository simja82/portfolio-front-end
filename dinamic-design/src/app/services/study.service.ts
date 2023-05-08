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

  //Encontrar NOTAR QUE ACÁ VA Observable<Study[]> y no Observable<any>
  public findStudy(id: number): Observable<any> {
    return this.http.get<Study>(this.url + `/find/${id}`); 
  }

  //Crear
   public saveStudy(study: Study): Observable<any> {
    return this.http.post<any>(this.url + '/new', study); 
  } 

  //Editar NOTAR QUE ACÁ VA put<any> Y NO put<Study> O put<Study[]>
  public updateStudy(study: Study): Observable<any> {
    return this.http.put<any>(this.url + `/update`, study);    
  }

  //Eliminar NOTAR QUE ACÁ VA delete<any> Y NO delete<Intro> O delete<Intro[]>
  /*
  public deleteStudy(id: number): Observable<Study> {
    return this.http.delete<Study>(this.url + `/delete/${id}`); 
  } 
  */
  /*
  public deleteStudy(id: number): Observable<any> {
    return this.http.delete(this.url + `/delete/${id}`);
  }  
  */

  public deleteStudy(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/delete/${id}`); 
  }   

}
