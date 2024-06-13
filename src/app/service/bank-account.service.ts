// src/app/bank-account.service.ts

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private apiUrl = 'https://jibi-backend-h27e.onrender.com/api/bankaccount'; // Modifiez l'URL si nécessaire
  private codeApiUrl = 'https://jibi-backend-h27e.onrender.com/api/codes'; // URL pour l'envoi de codes
  constructor(private http: HttpClient) {}
  private getAuthHeaders(): HttpHeaders {

    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  transferMoney(sourceAccountNumber: number, destinationAccountNumber: number, amount: number): Observable<any> {
    const headers = this.getAuthHeaders();
    const params = new HttpParams()
      .set('sourceAccountNumber', sourceAccountNumber.toString())
      .set('destinationAccountNumber', destinationAccountNumber.toString())
      .set('amount', amount.toString());

    return this.http.post(`${this.apiUrl}/transfer`, null, { headers, params });
  }

  //le phone number
  sendCode(phoneNumber: string): Observable<string> {
    const headers = this.getAuthHeaders();
    const codeDTO = { phonenumber: phoneNumber };
    return this.http.post<string>(`${this.codeApiUrl}/send`, codeDTO,{ headers });
  }
}
