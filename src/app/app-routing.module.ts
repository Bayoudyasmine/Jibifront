import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { CreditorsListComponent } from './creditors-list/creditors-list.component';
import { HistoryComponent } from './history/history.component';
import {FormulaireComponent } from './formulaire/formulaire.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import {LoginComponentComponent} from "./login-component/login-component.component";
import {AgentComponent} from "./agent-component/agent.component";
import {AdminComponent} from "./admin/admin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FirstLoginComponent} from "./firstlogin/firstlogin.component";
import {TransferMoneyComponent} from "./transfer-money/transfer-money.component";
import {HomeComponent} from "./home/home.component";
import {DonationFormComponent} from "./donation-form/donation-form.component";

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component:HomeComponent },
  { path: 'creditors-list', component: CreditorsListComponent },
  { path: 'history', component: HistoryComponent },
  {path : 'formulaire', component: FormulaireComponent },
  {path : 'create-payment-account', component: CreatePaymentAccountComponent },
  {path:'transfer-money',component:TransferMoneyComponent},
  {path : 'login', component: LoginComponentComponent },
  {path : 'agent-page', component: AgentComponent },
  {path : 'admin-page', component: DashboardComponent },
  {path : 'firstlogin', component: FirstLoginComponent },
  {path:'donation-form',component:DonationFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule { }
