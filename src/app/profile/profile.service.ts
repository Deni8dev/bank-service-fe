import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../dto/account.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {
  }

  getUserAccount(userId: number): Observable<Account> {
    return this.httpClient.get<Account>(`http://localhost:8080/v1/accounts/${userId}`);
  }

}
