import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { CreditorsListComponent } from './creditors-list/creditors-list.component';
import { HistoryComponent } from './history/history.component';
import {FormulaireComponent } from './formulaire/formulaire.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import {LoginComponentComponent} from "./login-component/login-component.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'creditors-list', component: CreditorsListComponent },
  { path: 'history', component: HistoryComponent },
  {path : 'formulaire', component: FormulaireComponent },
  {path : 'create-payment-account', component: CreatePaymentAccountComponent },
  {path : 'login', component: LoginComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule { }
