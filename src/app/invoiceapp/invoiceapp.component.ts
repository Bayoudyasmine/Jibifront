import { Component } from '@angular/core';

@Component({
  selector: 'app-invoiceapp',
  templateUrl: './invoiceapp.component.html',
  styleUrls: ['./invoiceapp.component.css']
})
export class InvoiceAppComponent {

  cancelTransaction() {
    console.log("Transaction cancelled");
    // Logic to handle cancellation
  }

  confirmTransaction() {
    console.log("Transaction confirmed");
    // Logic to handle confirmation
  }

}
