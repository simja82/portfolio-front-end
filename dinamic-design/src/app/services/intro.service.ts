import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intro } from '../models/intro';

@Injectable({
  providedIn: 'root'
})

export class IntroService {

  url= 'http://localhost:8080/intro/'; 
  //url= 'https://pointofview.onrender.com/intro/';


  constructor(private http:HttpClient) { }

  //Listar
  public getIntros(): Observable<any> {
    return this.http.get<Intro[]>(this.url + 'list');
  }

  //Encontrar
  public findIntro(id: number): Observable<Intro[]> {
    return this.http.get<Intro[]>(this.url + `find/${id}`); 
  }

  //Crear
   public saveIntro(intro: Intro): Observable<any> {
    return this.http.post<any>(this.url + 'new', intro); 
  } 

  //Editar
  
  public updateIntro(intro: Intro): Observable<any> {
    return this.http.put<any>(this.url + `update`, intro);    
  }
  
  
  /*
  //ESTO FUNCIONA? CÓMO ACTUALIZA SI NO ES POR ID?
  public updateIntro(intro: Intro): Observable<any> {
    return this.http.put<any>(this.url + 'update', intro);    
  }  
  */

  //Eliminar
  public deleteIntro(id: number): Observable<Intro> {
    return this.http.delete<Intro>(this.url + `delete/` + id); 
  } 

  /*
  //ESTA ES OTRA FORMA DE PONER CASI LO  MISMO 
  public deleteIntro(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/{id}`); 
  }   
  */
}
