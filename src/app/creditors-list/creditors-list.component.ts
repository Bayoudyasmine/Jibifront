import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AccountOperationService} from "../service/account-operation.service";
import {ClientDTO} from "../model/ClientDTO.model";
import {AccountOperationDTO} from "../model/AccountOpertionDTO.model";
import { Location } from '@angular/common';
@Component({
  selector: 'app-creditors-list',
  templateUrl: './creditors-list.component.html',
  styleUrls: ['./creditors-list.component.css']
})
export class CreditorsListComponent implements OnInit {
  activeTab: string = 'creditors';
  creditors = [
    { type: 'recharge', logo: 'assets/images/maroc-telecom.png', name: 'IAM Recharges', products: ['Téléphonie et Internet SIM'] },
    { type: 'FACTURE', logo: 'assets/images/maroc-telecom.png', name: 'IAM Factures', products: ['Produit Internet SIM', 'Produit Fixe SIM', 'Produit Mobile SIM'] },
    { type: 'FACTURE', logo: 'assets/images/inwi.png', name: 'Inwi Factures', products: ['Produit Internet SIM', 'Produit Fixe SIM', 'Produit Mobile SIM'] },
    { type: 'FACTURE', logo: 'assets/images/redal.jpeg', name: 'Redal', products: ['Factures Redal'] },
    { type: 'FACTURE', logo: 'assets/images/amendis.png', name: 'Amendis Tanger', products: ['Factures Amendis Tanger'] },
    { type: 'FACTURE', logo: 'assets/images/amendis.png', name: 'Amendis Tétouan', products: ['Factures Amendis Tétouan'] },
    { type: 'FACTURE', logo: 'assets/images/lydec.jpeg', name: 'Lydec', products: ['Factures Lydec'] },
    { type: 'DONATION', logo: 'assets/images/ALCS.png', name: 'ALCS DONATION', products: ['Don sidaction'] }
  ];

  paymentHistory: string[] = [
    "Paiement du créancier ONCF - 2023-01-15",
    "Paiement de la facture de téléphone - 2023-02-20",
    "Paiement de la facture d'eau - 2023-03-10"
  ];

  allCategories: string[] = ['ONCF', 'Téléphone', 'Eau', 'Électricité'];
  selectedCategory: string = 'Toutes les catégories';
  selectedCreditorForm: any = null;
  selectedProduct: string = '';
  // @ts-ignore
  clientDTO : ClientDTO=JSON.parse(localStorage.getItem("clientDTO"));
  accountId=this.clientDTO.bankAccountDTO.id;
  protected accountOperations: AccountOperationDTO[] | undefined;

  constructor(private formService: FormService, private fb: FormBuilder,private  accountOperationService:AccountOperationService,private location: Location) {}

  ngOnInit(): void {
    this.loadAccountOperations();
  }

  get filteredCreditors() {
    if (this.selectedCategory === 'Toutes les catégories') {
      return this.creditors;
    } else {
      return this.creditors.filter(creditor =>
        creditor.products.includes(this.selectedCategory)
      );
    }
  }

  getCreditorPairs(creditors: any[]) {
    const pairs = [];
    for (let i = 0; i < creditors.length; i += 2) {
      pairs.push(creditors.slice(i, i + 2));
    }
    return pairs;
  }

  selectProduct(creditorType: string, product: string) {
    this.selectedProduct = product;
    console.log(`Creditor Type: ${creditorType}, Product: ${product}`);

    this.formService.getFormByType(creditorType).subscribe(
      form => {
        console.log('Form retrieved:', form);
        this.selectedCreditorForm = form;
      },
      error => {
        console.error('Error fetching form:', error);
      }
    );
  }

  loadAccountOperations(): void {
    this.accountOperationService.getAccountOperations(this.accountId)
      .subscribe(
        operations => {
          this.accountOperations = operations;
          console.log(this.accountOperations); // Pour vérifier dans la console du navigateur
        },
        error => {
          console.error('Erreur lors du chargement des opérations de compte :', error);
        }
      );
  }

  formatDateTime(dateTime: Date): string {
    const operationDate = new Date(dateTime);
    const year = operationDate.getFullYear();
    const month = operationDate.getMonth() + 1;
    const day = operationDate.getDate();
    const hours = operationDate.getHours();
    const minutes = operationDate.getMinutes();
    // Créer une chaîne formatée avec le format souhaité
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  goBack(): void {
    this.location.back();
  }
}
