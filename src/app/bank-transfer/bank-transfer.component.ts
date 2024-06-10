// bank-transfer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.css']
})
export class BankTransferComponent {
  transferDetails = {
    accountType: 'IBAN',
    fromAccount: '',
    toAccount: '',
    amount: '',
    executionDate: 'ASAP',
    executionDateSpecific: '',
    communication: '',
    saveTransfer: false,
    beneficiaryName: '',
    accountNumber: '',
    saveBeneficiary: false
  };

  accounts = ['Compte A', 'Compte B', 'Compte C']; // Exemple de comptes disponibles

  goBack() {
    // Implémentez la logique pour retourner à la page précédente
    console.log('Retour à la page précédente');
  }

  cancelTransfer() {
    // Implémentez la logique pour annuler le transfert
    console.log('Transfert annulé');
  }

  submitTransfer() {
    // Implémentez la logique pour soumettre le transfert
    console.log('Détails du transfert soumis', this.transferDetails);
  }
}
