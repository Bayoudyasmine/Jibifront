import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CreditorsListComponent } from './creditors-list/creditors-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        FormulaireComponent,
        CreatePaymentAccountComponent,
        CreditorsListComponent,
        HomeComponent,
        NavbarComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatTabsModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
