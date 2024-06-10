// create-payment-account.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-payment-account',
  templateUrl: './create-payment-account.component.html',
  styleUrls: ['./create-payment-account.component.css']
})
export class CreatePaymentAccountComponent implements OnInit {
  currentPage: number = 1;
  clientInfoForm: FormGroup;
  cinRectoFile: File | null = null;
  cinVersoFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.clientInfoForm = this.fb.group({
      product: ['COMPTE_200', Validators.required], // Set default value to 'hssab1'
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('^\\+212[6-7][0-9]{8}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  nextPage(): void {
    if (this.currentPage === 1) {
        this.currentPage = 2;
    }
  }

  onSubmit(): void {
    if (this.clientInfoForm.valid && this.cinRectoFile && this.cinVersoFile) {
      const formData = new FormData();
      formData.append('account_type', this.clientInfoForm.get('product')?.value);
      formData.append('lastname', this.clientInfoForm.get('nom')?.value);
      formData.append('firstname', this.clientInfoForm.get('prenom')?.value);
      formData.append('phonenumber', this.clientInfoForm.get('telephone')?.value);
      formData.append('email', this.clientInfoForm.get('email')?.value);
      formData.append('cinRectoPath', this.cinRectoFile);
      formData.append('cinVersoPath', this.cinVersoFile);

      // Call your service method to handle the form submission
      // this.agentService.createClient(formData).subscribe(
      //   response => {
      //     // Handle successful response
      //   },
      //   error => {
      //     // Handle error response
      //   }
      // );
    } else {
      // Handle invalid form or missing files
    }
  }

  onFileChange(event: Event, side: 'cinRecto' | 'cinVerso'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (side === 'cinRecto') {
        this.cinRectoFile = input.files[0];
      } else if (side === 'cinVerso') {
        this.cinVersoFile = input.files[0];
      }
    }
  }
}
