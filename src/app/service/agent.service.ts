import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {ClientDTO} from "../model/ClientDTO.model";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiUrl = 'http://localhost:8080/api/clients'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientDTO[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ClientDTO[]>(this.apiUrl, { headers });
  }
}
