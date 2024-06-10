import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditorsListComponent } from './creditors-list/creditors-list.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import { HomeComponent } from './home/home.component';
// @ts-ignore
import { LoginComponentComponent } from './login-component/login-component.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { InvoicePaymentComponent } from './invoice-payment/invoice-payment.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceAppComponent } from './invoiceapp/invoiceapp.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'creditors-list', component: CreditorsListComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'create-payment-account', component: CreatePaymentAccountComponent },
  {path: 'donnation',component: DonationFormComponent},
  {path: 'invoice',component:InvoicePaymentComponent},
  {path: 'login',component:LoginComponentComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'invoiceapp',component:InvoiceAppComponent},
  {path:'virement',component: BankTransferComponent},
  {path: 'verification',component:VerificationCodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
