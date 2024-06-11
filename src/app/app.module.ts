import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePaymentAccountComponent } from './create-payment-account/create-payment-account.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CreditorsListComponent } from './creditors-list/creditors-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { FooterComponent } from './footer/footer.component';
import { InvoicePaymentComponent } from './invoice-payment/invoice-payment.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceAppComponent } from './invoiceapp/invoiceapp.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
@NgModule({
    declarations: [
        AppComponent,
        FormulaireComponent,
        CreatePaymentAccountComponent,
        CreditorsListComponent,
        HomeComponent,
        NavbarComponent,
        LoginComponentComponent,
        FooterComponent,
        ProfileComponent,
        InvoiceAppComponent,
        BankTransferComponent,
        VerificationCodeComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule, // Add ReactiveFormsModule here
        BrowserAnimationsModule,
        HttpClientModule,
        InvoicePaymentComponent,
        DonationFormComponent,
        MatDialogModule,


    ],
    providers: [LoginService],
    exports: [
        CreditorsListComponent,
        FormulaireComponent,
        CreatePaymentAccountComponent,
        InvoicePaymentComponent,
        DonationFormComponent
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
