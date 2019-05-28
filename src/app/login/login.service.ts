import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  login(name: string, pass: string): Observable<boolean> {
    return this.httpClient
      .post<boolean>(
        'http://localhost:8080/v1/login',
        {username: name, password: pass}
      );
  }
}
