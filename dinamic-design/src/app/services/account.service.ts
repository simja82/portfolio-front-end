import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  url= 'http://localhost:8080/account/'; 
  //url= 'https://pointofview.onrender.com/account/';

  constructor(private http:HttpClient) { }

  //Listar
  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url + '/list');
  }

  //Encontrar
  public findAccount(id: number): Observable<any> {
    return this.http.get<Account>(this.url + `/find/${id}`); 
  }

  //Crear
   public saveAccount(account: Account): Observable<any> {
    return this.http.post<any>(this.url + '/new', account); 
  } 

  //Editar
  public updateAccount(account: Account): Observable<any> {
    return this.http.put<Account>(this.url + `/update`, account);    
  }

  //Eliminar
  public deleteAccount(id: number): Observable<Account> {
    return this.http.delete<any>(this.url + `/delete/${id}`); 
  }  

}
