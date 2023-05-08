//Modelo de Service para Datos Simples
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intro } from '../models/intro';

@Injectable({
  providedIn: 'root'
})

export class IntroService {

  url= 'http://localhost:8080/intro'; 
  //url= 'https://pointofview.onrender.com/intro';

  constructor(private http:HttpClient) { }

  //Listar
  public getIntros(): Observable<Intro[]> {
    return this.http.get<Intro[]>(this.url + '/list');
  }

  //Encontrar
  public findIntro(id: number): Observable<any> {
    return this.http.get<Intro>(this.url + `/find/${id}`); 
  }

  //Crear
   public saveIntro(intro: Intro): Observable<any> {
    return this.http.post<any>(this.url + '/new', intro); 
  } 

  //Editar
  public updateIntro(intro: Intro): Observable<any> {
    return this.http.put<Intro>(this.url + `/update`, intro);    
  }

  //Eliminar
  public deleteIntro(id: number): Observable<Intro> {
    return this.http.delete<any>(this.url + `/delete/${id}`); 
  } 

}
