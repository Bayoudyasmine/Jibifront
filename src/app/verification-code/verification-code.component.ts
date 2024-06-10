// verification-code.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css'],

})
export class VerificationCodeComponent {
  verificationCode: string = '';

  constructor(private router: Router) {}

  // Méthode pour vérifier le code
  verifyCode() {
    // Logique pour vérifier le code de vérification
    // Par exemple, comparer avec un code attendu
    if (this.verificationCode === '123456') {
      alert('Virement confirmé !');
      // Rediriger ou effectuer une autre action après la vérification réussie
      this.router.navigate(['/success']);
    } else {
      alert('Code de vérification incorrect. Veuillez réessayer.');
    }
  }
}
