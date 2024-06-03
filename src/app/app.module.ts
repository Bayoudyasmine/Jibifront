import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que ReactiveFormsModule est importé
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {CreditorsListComponent} from "./creditors-list/creditors-list.component";
import {HistoryComponent} from "./history/history.component";
import { MatTabsModule } from '@angular/material/tabs'
@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    CreatePaymentAccountComponent,
    CreditorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [],
  exports: [
    CreditorsListComponent,
    FormulaireComponent,
    CreatePaymentAccountComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
