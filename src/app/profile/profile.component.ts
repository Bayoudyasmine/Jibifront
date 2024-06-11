import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showBalance: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const toggleEyeButton = document.getElementById('toggle-eye') as HTMLInputElement;
    const balanceValue = document.getElementById('balance-value') as HTMLElement;
    const toggleTransferButton = document.getElementById('toggle-transfer');
    const toggleCreditorsButton = document.getElementById('toggle-creditors');

    if (toggleEyeButton && balanceValue && toggleTransferButton && toggleCreditorsButton) {
      toggleEyeButton.addEventListener('click', () => {
        if (toggleEyeButton.checked) {
          balanceValue.style.visibility = 'visible';
        } else {
          balanceValue.style.visibility = 'hidden';
        }
      });

      // Ajoutez une action au clic du bouton "Effectuer un virement"
      toggleTransferButton.addEventListener('click', () => {
        // Rediriger vers la page de virement
        this.router.navigate(['/virement']);
      });

      // Ajoutez une action au clic du bouton "Liste des créanciers"
      toggleCreditorsButton.addEventListener('click', () => {
        // Rediriger vers la page de liste des créanciers
        this.router.navigate(['/creditors-list']);
      });
    }
  }
}
