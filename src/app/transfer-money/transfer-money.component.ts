import { Component } from '@angular/core';
import {BankAccountService} from "../service/bank-account.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-transfer-money',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './transfer-money.component.html',
  styleUrl: './transfer-money.component.css'
})
export class TransferMoneyComponent {
  sourceAccountId= localStorage.getItem("clientId");
  destinationAccountId!: number;
  amount!: number;
  message: string = '';
  phoneNumber: string = '+212646480816';
  generatedCode: string = '';
  communication: any;

  constructor(private bankAccountService: BankAccountService) {}

  sendVerificationCode() {
    this.bankAccountService.sendCode(this.phoneNumber).subscribe(
      code => {
        this.generatedCode = code;
        console.log(this.generatedCode);
        alert('Verification code sent to your phone.');
        this.promptVerificationCode();
      },
      error => {
        this.message = `Error: ${error.error}`;
      }
    );
  }

  promptVerificationCode() {
    const userCode = prompt('Please enter the verification code sent to your phone:');
    if (userCode !== this.generatedCode.toString()) {
      alert('Incorrect verification code. Please try again.');
    } else {
      console.log("all is well");
      this.submitTransfer();
    }
  }

  goBack() {

  }

  submitTransfer() {
    this.bankAccountService.transferMoney(Number(this.sourceAccountId), this.destinationAccountId, this.amount).subscribe(
      response => {
        // console.log('Transfer completed successfully');
        alert('Transfer completed successfully');
      },
      error => {
        console.log(error);
      }
    );
  }

  cancelTransfer() {

  }
}
