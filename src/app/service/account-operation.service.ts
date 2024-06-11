import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountOperationDTO} from "../model/AccountOpertionDTO.model";

@Injectable({
  providedIn: 'root'
})
export class AccountOperationService {

  private apiUrl = 'http://localhost:8080/api/bankaccount/operations'; // URL de votre endpoint

  constructor(private http: HttpClient) { }

  getAccountOperations(accountId: number): Observable<AccountOperationDTO[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<AccountOperationDTO[]>(`${this.apiUrl}?accountId=${accountId}`,{ headers });
  }
}
