import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movement } from '../dto/movement.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  constructor(private httpClient: HttpClient) { }

  getMovements(accountId: number): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(`${environment.service_url}/transactions/${accountId}`);
  }
}
