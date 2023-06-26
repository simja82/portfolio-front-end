//Modelo de Service para Datos Recorridos
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Button } from '../models/button';

@Injectable({
  providedIn: 'root'
})

export class ButtonService {

  //url= 'http://localhost:8080/button'; 
  url= 'https://pointofview.onrender.com/button';

  constructor(private http:HttpClient) { }

  //Listar
  public getButtons(): Observable<Button[]> {
    return this.http.get<Button[]>(this.url + '/list');
  }

  //Encontrar
  public findButton(id: number): Observable<Button> {
    return this.http.get<Button>(this.url + `/find/${id}`); 
  }
 

  //Crear
   public saveButton(button: Button): Observable<any> {
    return this.http.post<any>(this.url + '/new', button); 
  } 

  //Editar
  public updateButton(id:number, button: Button): Observable<any> {
    return this.http.put<any>(this.url + `/update/${id}`, button);    
  }  

  //Eliminar
  public deleteButton(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/delete/' + id); 
  }   

}
