import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {ClientDTO} from "../model/ClientDTO.model";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiUrl = 'https://jibi-backend-h27e.onrender.com/api/clients'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientDTO[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ClientDTO[]>(this.apiUrl, { headers });
  }

  subscribeAgent(formData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>("https://jibi-backend-h27e.onrender.com/api/agents", formData, { headers });
  }

  deleteClient(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

}
