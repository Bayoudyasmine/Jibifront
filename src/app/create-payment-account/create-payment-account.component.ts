import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-payment-account',
  templateUrl: './create-payment-account.component.html',
  styleUrls: ['./create-payment-account.component.css']
})
export class CreatePaymentAccountComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      product: ['hssab1'],
      nom: [''],
      prenom: [''],
      telephone: [''],
      email: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.paymentForm.value);
  }
}
