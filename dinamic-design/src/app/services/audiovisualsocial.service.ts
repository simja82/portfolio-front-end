import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AudiovisualSocial } from "../models/audiovisualsocial";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AudiovisualSocialService {
    
    url= 'http://localhost:8080/audiovisualsocial';
    //url= 'https://pointofview.onrender.com/audiovisualsocial';
  
    constructor(private http:HttpClient) { }
        
    //Listar
    public getAudiovisualSocials(): Observable<AudiovisualSocial[]> {
        return this.http.get<AudiovisualSocial[]>(this.url + '/list');
    }
  
    //Encontrar
    public findAudiovisualSocial(id: number): Observable<AudiovisualSocial> {
        return this.http.get<AudiovisualSocial>(this.url + `/find/${id}`);
    }
  
    //Crear
    public saveAudiovisualSocial(audiovisualsocial: AudiovisualSocial): Observable<any> {
        return this.http.post<any>(this.url + '/new', audiovisualsocial);
    }
  
    //Editar
    public updateAudiovisualSocial(id:number, audiovisualsocial: AudiovisualSocial): Observable<any> {
        return this.http.put<any>(this.url + `/update/${id}`, audiovisualsocial);    
    }
      
    //Eliminar
    public deleteAudiovisualSocial(id: number): Observable<AudiovisualSocial> {
        return this.http.delete<AudiovisualSocial>(this.url + `/delete/` + id);
    }
    
}
  