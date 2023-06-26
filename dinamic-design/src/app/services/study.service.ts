import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Study } from "../models/study";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StudyService {
    
    //url= 'http://localhost:8080/study';
    url= 'https://pointofview-dy8a.onrender.com/study';
  
    constructor(private http:HttpClient) { }
        
    //Listar
    public getStudies(): Observable<Study[]> {
        return this.http.get<Study[]>(this.url + '/list');
    }
  
    //Encontrar
    public findStudy(id: number): Observable<Study> {
        return this.http.get<Study>(this.url + `/find/${id}`);
    }
  
    //Crear
    public saveStudy(study: Study): Observable<any> {
        return this.http.post<any>(this.url + '/new', study);
    }
  
    //Editar
    public updateStudy(id:number, study: Study): Observable<any> {
        return this.http.put<any>(this.url + `/update/${id}`, study);    
    }
      
    //Eliminar
    public deleteStudy(id: number): Observable<Study> {
        return this.http.delete<Study>(this.url + `/delete/` + id);
    }
    
}
  