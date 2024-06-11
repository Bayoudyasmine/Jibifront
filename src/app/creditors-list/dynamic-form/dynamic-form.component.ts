import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../service/form.service';  // Import the FormService

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: any;
  @Input() product: string | undefined;
  formulaire: FormGroup;
  rechargeOptions: number[] = [10, 20, 50, 100]; // Example recharge options

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formulaire = this.fb.group({});
  }

  ngOnInit(): void {
    console.log('Form Config:', this.formConfig);
    console.log('Selected Product:', this.product);
    if (this.formConfig) {
      this.updateFormGroup(this.formConfig);
    }
  }

  updateFormGroup(form: any) {
    const group: any = {};
    form.fields.forEach((field: any) => {
      group[field.name] = ['', field.required ? Validators.required : null];
    });
    this.formulaire = this.fb.group(group);
  }

  onSubmit() {
    if (this.formulaire.valid) {
      const formData = new FormData();
      let selectedAmount = null ;
      // Set billerId based on form type
      let billerId;
      switch (this.formConfig.type.toUpperCase()) {
        case 'RECHARGE':
          billerId = 1;
          // Add amount to FormData
          selectedAmount = this.formulaire.value.amount;
          break;
        case 'FACTURE':
          billerId = 2;
          break;
        case 'DONATION':
          billerId = 3;
          break;
        default:
          console.error('Unknown form type');
          return;
      }

      // Retrieve clientId from localStorage
      const clientId = localStorage.getItem('id');
      if (!clientId) {
        console.error('Client ID not found in localStorage');
        return;
      }

      // Append billerId and clientId to formData
      formData.append('billerId', billerId.toString());
      formData.append('clientId', clientId);
      formData.append('amount', selectedAmount);
      console.log(formData.get('amount'))

      // Submit the form data to the backend
      this.formService.createInvoice(formData).subscribe(response => {
        console.log('Form submitted successfully', response);
      }, error => {
        console.error('Error submitting form', error);
      });
    } else {
      console.error('Form is invalid');
    }
  }

}
