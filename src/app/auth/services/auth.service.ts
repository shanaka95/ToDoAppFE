import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { HTTPResponse } from 'src/app/shared/models/HTTPResponse';
import { NewUser } from './../model/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = environment.apiUrl;

    constructor( private http: HttpClient) { }

    register(user: NewUser): Observable<HTTPResponse> {

        return this.http.post<HTTPResponse>(this.apiUrl + '/register', user)
    }

    login(email: string, password:string): Observable<HTTPResponse> {

        const login_data = {
            email,
            password
        }

        return this.http.post<HTTPResponse>(this.apiUrl + '/login', login_data)
    }
}
