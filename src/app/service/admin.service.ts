

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { ClientDTO } from '../model/ClientDTO.model';
import {Agent} from "../model/Agent.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'https://jibi-backend-h27e.onrender.com/api/agents'; // URL de l'API Spring Boot

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
