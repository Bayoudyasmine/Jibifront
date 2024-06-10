import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log({ email, password });
      this.loginService.login(email, password).subscribe(
        (response: any) => {
          const role = localStorage.getItem('role')
          const firstlogin = localStorage.getItem('firstlogin')

          console.log({ email, password });

          if (role === 'ROLE_AGENT') {
            if( firstlogin === 'true'){
              this.router.navigate(['/firstlogin']);
            }
            else this.router.navigate(['/agent-page']);
          }else if (role === 'ROLE_CLIENT') {
            if(firstlogin === 'true'){
              this.router.navigate(['/firstlogin']);
            }
            this.router.navigate(['/agent-page']);
          } else if (role === 'ROLE_ADMIN') {
            this.router.navigate(['/formulaire']);
          } else {
            this.errorMessage = 'Rôle inconnu reçu du serveur';
          }
        },
        error => {
          this.errorMessage = 'Échec de la connexion. Veuillez vérifier votre email et votre mot de passe.';
        }
      );
    } else {
      this.errorMessage = 'Veuillez entrer une adresse email et un mot de passe valides.';
    }
  }
}
