import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../models/section';

@Injectable({
  providedIn: 'root'
})

export class SectionService {
  section: Section[]=[];
  sectionService: any;

  url= 'http://localhost:8080/section/'; 
  //url= 'https://pointofview.onrender.com/section/';


  constructor(private http:HttpClient) { }

  //Listar
  public getSections(): Observable<any> {
    return this.http.get<Section[]>(this.url + 'list');
  }

  //Encontrar
  public findSection(id: number): Observable<Section[]> {
    return this.http.get<Section[]>(this.url + `find/${id}`); 
  }

  //Crear
   public saveSection(section: Section): Observable<any> {
    return this.http.post<any>(this.url + 'new', section); 
  } 

  //Editar
  public updateSection(id:number, section: Section): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, section);    
  }

  //Eliminar
  public deleteSection(id: number): Observable<Section> {
    return this.http.delete<Section>(this.url + `delete/` + id); 
  } 

}
