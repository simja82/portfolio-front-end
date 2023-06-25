import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeveloperProfile } from '../models/developer_profile';

@Injectable({
  providedIn: 'root'
})

export class DeveloperProfileService {

  //url= 'http://localhost:8080/developer_profile'; 
  url= 'https://pointofview.onrender.com/developer_profile';

  constructor(private http:HttpClient) { }

  //Listar
  public getDeveloperProfiles(): Observable<DeveloperProfile[]> {
    return this.http.get<DeveloperProfile[]>(this.url + '/list');
  }

  //Encontrar
  public findDeveloperProfile(id: number): Observable<any> {
    return this.http.get<DeveloperProfile>(this.url + `/find/${id}`); 
  }

  //Crear
   public saveDeveloperProfile(developerprofile: DeveloperProfile): Observable<any> {
    return this.http.post<any>(this.url + '/new', developerprofile); 
  } 

  //Editar
  public updateDeveloperProfile(developerprofile: DeveloperProfile): Observable<any> {
    return this.http.put<DeveloperProfile>(this.url + `/update`, developerprofile);    
  }

  //Eliminar
  public deleteDeveloperProfile(id: number): Observable<DeveloperProfile> {
    return this.http.delete<any>(this.url + `/delete/${id}`); 
  }  

}
