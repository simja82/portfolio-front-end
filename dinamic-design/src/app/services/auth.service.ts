import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    url = 'http://localhost:8080/account/auth/login'  
    //url = 'https://pointofview.onrender.com/account/auth/login'
  
    currentUserSubject: BehaviorSubject<any>; 

    constructor(private http: HttpClient) { 
        //Prueba en Consola
        console.log('Auth is running');
        this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    }
  
    login(credentials: any): Observable<any>{
        //console.log(credencials);
        var httpOptions={
            headers:new HttpHeaders({
                'ContentType':'application/json'
            })
        }
        return this.http.post<any>(this.url, credentials, httpOptions).pipe(map(data=> {
            sessionStorage.setItem('currentUser',JSON.stringify(data));
            this.currentUserSubject.next(data);
            //Prueba en Consola
            console.log("authService is running " + JSON.stringify(data));
            return data;
        }));
    }

    get authenticatedAccount() {
        return this.currentUserSubject.value;
    }
}
