import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeveloperProfile } from '../models/developer_profile';

@Injectable({
  providedIn: 'root'
})

export class DeveloperProfileService {
  developer_profile: DeveloperProfile[]=[];
  developer_profileService: any;

  url= 'http://localhost:8080/developer_profile/'; 
  //url= 'https://pointofview.onrender.com/developer_profile/';


  constructor(private http:HttpClient) { }

  //Listar
  public getDeveloperProfiles(): Observable<any> {
    return this.http.get<DeveloperProfile[]>(this.url + 'list');
  }

  //Encontrar
  public findDeveloperProfile(id: number): Observable<DeveloperProfile[]> {
    return this.http.get<DeveloperProfile[]>(this.url + `find/${id}`); 
  }

  //Crear
   public saveDeveloperProfile(developer_profile: DeveloperProfile): Observable<any> {
    return this.http.post<any>(this.url + 'new', developer_profile); 
  } 

  //Editar
  public updateDeveloperProfile(id:number, developer_profile: DeveloperProfile): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, developer_profile);    
  }

  //Eliminar
  public deleteDeveloperProfile(id: number): Observable<DeveloperProfile> {
    return this.http.delete<DeveloperProfile>(this.url + `delete/` + id); 
  } 

}
