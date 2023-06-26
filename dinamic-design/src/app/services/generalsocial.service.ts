import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GeneralSocial } from "../models/generalsocial";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class GeneralSocialService {
    
    //url= 'http://localhost:8080/generalsocial';
    url= 'https://pointofview-dy8a.onrender.com/generalsocial';
  
    constructor(private http:HttpClient) { }
        
    //Listar
    public getGeneralSocials(): Observable<GeneralSocial[]> {
        return this.http.get<GeneralSocial[]>(this.url + '/list');
    }
  
    //Encontrar
    public findGeneralSocial(id: number): Observable<GeneralSocial> {
        return this.http.get<GeneralSocial>(this.url + `/find/${id}`);
    }
  
    //Crear
    public saveGeneralSocial(generalsocial: GeneralSocial): Observable<any> {
        return this.http.post<any>(this.url + '/new', generalsocial);
    }
  
    //Editar
    public updateGeneralSocial(id:number, generalsocial: GeneralSocial): Observable<any> {
        return this.http.put<any>(this.url + `/update/${id}`, generalsocial);    
    }
      
    //Eliminar
    public deleteGeneralSocial(id: number): Observable<GeneralSocial> {
        return this.http.delete<GeneralSocial>(this.url + `/delete/` + id);
    }
    
}
  