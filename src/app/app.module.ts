import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ListInvoicesModule } from './list-invoices/list-invoices.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNGModule,
    InvoicesModule,
    ListInvoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
