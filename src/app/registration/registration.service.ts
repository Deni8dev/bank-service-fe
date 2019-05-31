import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../dto/user.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser(user: User): Observable<boolean> {
    return this.httpClient.post<boolean>('http://localhost:8080/v1/users', user);
  }
}
