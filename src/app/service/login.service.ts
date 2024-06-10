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
    console.log({ email, password });

    const headers = new HttpHeaders();

    // Préparer le corps de la requête avec FormData
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return this.http.post(this.apiUrl, formData, { headers, responseType: 'text' }).pipe(
      map(response => {
        console.log({ email, password });
        // Assuming the response is a JSON object containing role and token
        const { firstlogin, role, token } = JSON.parse(response);
        console.log(firstlogin);
        console.log(token);
        console.log(role);
        if (token && role) {
          localStorage.setItem('firstlogin', firstlogin);
          localStorage.setItem('token', token); // Enregistrer le token dans le localStorage
          localStorage.setItem('role', role); // Enregistrer le rôle dans le localStorage
        }
        return token;
      })
    );
  }
}
