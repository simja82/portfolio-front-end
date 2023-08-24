import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Helper } from "../models/helper";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HelperService {
    
    url= 'http://localhost:8080/helper';
    //url= 'https://pointofview.onrender.com/helper';
  
    constructor(private http:HttpClient) { }
        
    //Listar
    public getHelpers(): Observable<Helper[]> {
        return this.http.get<Helper[]>(this.url + '/list');
    }
  
    //Encontrar
    public findHelper(id: number): Observable<Helper> {
        return this.http.get<Helper>(this.url + `/find/${id}`);
    }
  
    //Crear
    public saveHelper(helper: Helper): Observable<any> {
        return this.http.post<any>(this.url + '/new', helper);
    }
  
    //Editar
    public updateHelper(id:number, helper: Helper): Observable<any> {
        return this.http.put<any>(this.url + `/update/${id}`, helper);    
    }
      
    //Eliminar
    public deleteHelper(id: number): Observable<Helper> {
        return this.http.delete<Helper>(this.url + `/delete/` + id);
    }
    
}
  