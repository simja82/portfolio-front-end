import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DeveloperSocial } from "../models/developersocial";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DeveloperSocialService {
    
    url= 'http://localhost:8080/developersocial';
    //url= 'https://pointofview.onrender.com/developersocial';
  
    constructor(private http:HttpClient) { }
        
    //Listar
    public getDeveloperSocials(): Observable<DeveloperSocial[]> {
        return this.http.get<DeveloperSocial[]>(this.url + '/list');
    }
  
    //Encontrar
    public findDeveloperSocial(id: number): Observable<DeveloperSocial> {
        return this.http.get<DeveloperSocial>(this.url + `/find/${id}`);
    }
  
    //Crear
    public saveDeveloperSocial(developersocial: DeveloperSocial): Observable<any> {
        return this.http.post<any>(this.url + '/new', developersocial);
    }
  
    //Editar
    public updateDeveloperSocial(id:number, developersocial: DeveloperSocial): Observable<any> {
        return this.http.put<any>(this.url + `/update/${id}`, developersocial);    
    }
      
    //Eliminar
    public deleteDeveloperSocial(id: number): Observable<DeveloperSocial> {
        return this.http.delete<DeveloperSocial>(this.url + `/delete/` + id);
    }
    
}
  