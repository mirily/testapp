import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { PlanComponent } from './plan/plan.component';
import { BillingComponent } from './billing/billing.component';
import { FormService } from '../services/form.service';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    PlanComponent,
    BillingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ApiService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
