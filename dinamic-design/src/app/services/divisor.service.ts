//Modelo de Service para Datos Recorridos
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divisor } from '../models/divisor';

@Injectable({
  providedIn: 'root'
})

export class DivisorService {

  //url= 'http://localhost:8080/divisor'; 
  url= 'https://pointofview-dy8a.onrender.com/divisor';

  constructor(private http:HttpClient) { }

  //Listar
  public getDivisors(): Observable<Divisor[]> {
    return this.http.get<Divisor[]>(this.url + '/list');
  }

  //Encontrar
  public findDivisor(id: number): Observable<Divisor> {
    return this.http.get<Divisor>(this.url + `/find/${id}`); 
  }
 

  //Crear
   public saveDivisor(divisor: Divisor): Observable<any> {
    return this.http.post<any>(this.url + '/new', divisor); 
  } 

  //Editar
  public updateDivisor(id:number, divisor: Divisor): Observable<any> {
    return this.http.put<any>(this.url + `/update/${id}`, divisor);    
  }  

  //Eliminar
  public deleteDivisor(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/delete/' + id); 
  }   

}
