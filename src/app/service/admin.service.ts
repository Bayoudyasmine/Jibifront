

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Agent } from '../model/agent.model';
import { ClientDTO } from '../model/ClientDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8080/api/agents'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) { }

  getAgents(): Observable<Agent[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Agent[]>(`${this.apiUrl}`, { headers });
  }


  deleteAgent(id: number | undefined) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

}
