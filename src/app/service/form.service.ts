import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientDTO} from "../model/ClientDTO.model";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseUrl = 'http://localhost:8080/api/bankaccount';

  constructor(private http: HttpClient) { }

  getFormByType(type: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.baseUrl}/forms/${type}`, { headers });
  }
  createInvoice(formData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`http://localhost:8080/api/invoices`, formData, { headers });
  }
}