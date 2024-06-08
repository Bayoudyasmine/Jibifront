import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  email!:'';
  password!:'';
  loginForm!: FormGroup; // Utilisation de ! pour indiquer que loginForm sera initialisé dans ngOnInit
  errorMessage: string = '';

  constructor(
    private router : Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      password: this.formBuilder.control(null,[Validators.required,Validators.minLength(5)]),

      email : this.formBuilder.control(null,[Validators.required])
    });
  }
  onSubmit(): void {
    console.log(this.email + this.password);
    let body = this.loginForm.value
    console.log("Le body hhhhhhhhhhh",body)
    this.loginService.login(body.email, body.password).subscribe(
      token => {
        // Redirect to the desired page after successful login
        this.router.navigate(['/creditors-list']);
      },
      error => {
        this.errorMessage = 'Login failed. Please check your email and password.';
      });
  }

}
