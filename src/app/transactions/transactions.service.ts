import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Transaction {
  originAccount: string;
  targetAccount: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  saveTransaction(transaction: Transaction): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.service_url}/transactions`, transaction);
  }
}
