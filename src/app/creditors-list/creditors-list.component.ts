import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-creditors-list',
    templateUrl: './creditors-list.component.html',
    styleUrls: ['./creditors-list.component.css']
})
export class CreditorsListComponent implements OnInit {

    creditors = [
        {
            logo: 'assets/images/maroc-telecom.png',
            name: 'IAM Recharges',
            products: ['Téléphonie et Internet SIM']
        },
        {
            logo: 'assets/images/maroc-telecom.png',
            name: 'IAM Factures',
            products: ['Produit Internet SIM', 'Produit Fixe SIM', 'Produit Mobile SIM']
        },
        {
            logo: 'assets/images/redal.jpeg',
            name: 'Redal',
            products: ['Factures Redal']
        },
        {
            logo: 'assets/images/amendis.png',
            name: 'Amendis Tanger',
            products: ['Factures Amendis Tanger']
        },
        {
            logo: 'assets/images/amendis.png',
            name: 'Amendis Tétouan',
            products: ['Factures Amendis Tétouan']
        },
        {
            logo: 'assets/images/lydec.jpeg',
            name: 'Lydec',
            products: ['Factures Lydec']
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
