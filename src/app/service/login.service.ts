import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/login'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders();

    // Préparer le corps de la requête avec FormData
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return this.http.post(this.apiUrl, formData, { headers, responseType: 'text' }).pipe(
      map(response => {
        // Assuming the response is the token
        const token = response;
        if (token) {
          console.log(token)
          localStorage.setItem('token', token); // Save the token in local storage
        }
        return token;
      })
    );
  }
}
