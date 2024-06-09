import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditorsListComponent } from './creditors-list/creditors-list.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'creditors-list', component: CreditorsListComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'create-payment-account', component: CreatePaymentAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
