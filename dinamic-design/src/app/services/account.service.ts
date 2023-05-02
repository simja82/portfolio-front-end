import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  account: Account[]=[];
  accountService: any;

  url= 'http://localhost:8080/account/'; 
  //url= 'https://pointofview.onrender.com/account/';


  constructor(private http:HttpClient) { }

  //Listar
  public getAccounts(): Observable<any> {
    return this.http.get<Account[]>(this.url + 'list');
  }

  //Encontrar
  public findAccount(id: number): Observable<Account[]> {
    return this.http.get<Account[]>(this.url + `find/${id}`); 
  }

  //Crear
   public saveAccount(account: Account): Observable<any> {
    return this.http.post<any>(this.url + 'new', account); 
  } 

  //Editar
  public updateAccount(id:number, account: Account): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, account);    
  }

  //Eliminar
  public deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>(this.url + `delete/` + id); 
  } 

}
