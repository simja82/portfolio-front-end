import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '../models/title';

@Injectable({
  providedIn: 'root'
})

export class TitleService {

  url= 'http://localhost:8080/title'; 
  //url= 'https://pointofview.onrender.com/title';

  constructor(private http:HttpClient) { }

  //Listar
  public getTitles(): Observable<Title[]> {
    return this.http.get<Title[]>(this.url + '/list');
  }

  //Encontrar
  public findTitle(id: number): Observable<Title> {
    return this.http.get<Title>(this.url + `/find/${id}`); 
  }

  //Crear
   public saveTitle(title: Title): Observable<any> {
    return this.http.post<any>(this.url + '/new', title); 
  } 

  //Editar
  public updateTitle(id:number, title: Title): Observable<any> {
    return this.http.put<any>(this.url + `/update/${id}`, title);    
  }

  //Eliminar
  public deleteTitle(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/delete/${id}`); 
  }  

}
