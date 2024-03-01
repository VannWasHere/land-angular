import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Customer360Component } from './customer-360/customer-360.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NavbarComponent,
    FormComponent,
    Customer360Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
