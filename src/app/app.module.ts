import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que ReactiveFormsModule est importé
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {CreditorsListComponent} from "./creditors-list/creditors-list.component";
import {HistoryComponent} from "./history/history.component";

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    CreatePaymentAccountComponent,
    CreditorsListComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    CreditorsListComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
