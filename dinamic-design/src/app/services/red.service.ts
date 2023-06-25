import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Red } from "../models/red";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class RedService {

     //url= 'http://localhost:8080/red/';
     url= 'https://pointofview.onrender.com/red/';
  
     constructor(private http:HttpClient) { }
    
    //Listar -- FUNCIONA
      public getRedes(): Observable<any> {
        return this.http.get<any>(this.url + 'lista');
      }
  
    //Encontrar -- reemplace Red por any -- NO FUNCIONA
      public findRed(id: number): Observable<any> {
        return this.http.get<any>(this.url + 'find/' + id);
      }
  
    //Crear -- FUNCIONA
      public saveRed(red: Red): Observable<any> {
        return this.http.post<any>(this.url + 'new', red);
      }
  
      //Editar -- any/any NO FUNCIONA
      public updateRed(id:number, red: Red): Observable<any> {
        return this.http.put<any>(this.url + `update/${id}`, red);    
      }
      
    //Eliminar -- NO FUNCIONA
      public deleteRed(id: number): Observable<any> {
        return this.http.delete<any>(this.url + 'delete/' + id);
      }
    
  }
  