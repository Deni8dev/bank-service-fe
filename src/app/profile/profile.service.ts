import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../dto/account.dto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {
  }

  getUserAccount(userId: number): Observable<Account> {
    return this.httpClient.get<Account>(`${environment.service_url}/accounts/${userId}`);
  }

}
