import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanComponent } from './plan/plan.component';
import { InformationComponent } from './information/information.component';
import { BillingComponent } from './billing/billing.component';

export const routes: Routes = [
  {
    path: 'products/plan',
    component: PlanComponent
  },
  {
    path: 'products/information',
    component: InformationComponent
  },
  {
    path: 'products/billing',
    component: BillingComponent
  },
  {
    path: '**',
    redirectTo: 'products/plan'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
