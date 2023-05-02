import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intro } from '../models/intro';

@Injectable({
  providedIn: 'root'
})

export class IntroService {

  url= 'http://localhost:8080/intro/'; 
  //url= 'https://pointofview.onrender.com/intro/';

  constructor(private httpClient:HttpClient) { }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Intro>(this.url + `/${id}`);
  }

  public updateItem(intro: Intro): Observable<any>{
    return this.httpClient.put<Intro>(this.url, intro);
  }


}
