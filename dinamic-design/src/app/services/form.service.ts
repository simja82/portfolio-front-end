import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Forms } from "../models/form";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class FormService {
    
    url= 'http://localhost:8080/form';
    //url= 'https://pointofview.onrender.com/form';
  
    constructor(private http:HttpClient) { }
        
    //Listar
    public getForms(): Observable<Forms[]> {
        return this.http.get<Forms[]>(this.url + '/list');
    }
  
    //Encontrar
    public findForm(id: number): Observable<Forms> {
        return this.http.get<Forms>(this.url + `/find/${id}`);
    }
  
    //Crear
    public saveForm(form: Forms): Observable<any> {
        return this.http.post<any>(this.url + '/new', form);
    }
  
    //Editar
    public updateForm(id:number, form: Forms): Observable<any> {
        return this.http.put<any>(this.url + `/update/${id}`, form);    
    }
      
    //Eliminar
    public deleteForm(id: number): Observable<Forms> {
        return this.http.delete<Forms>(this.url + `/delete/` + id);
    }
    
}
  