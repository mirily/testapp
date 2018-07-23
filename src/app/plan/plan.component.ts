import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.less']
})
export class PlanComponent implements OnInit {
  selectPlan;
  planList;

  constructor(private formServ: FormService, private router: Router) {
    this.formServ.getPlans();
    this.formServ.plans.subscribe(data => {
      this.planList = data.plans;
    })
  }

  ngOnInit() {
  }

  setPlan(plan) {
    this.selectPlan = plan;
  }
  nextStep() {
    this.formServ.selectPLan.next(this.selectPlan);
    this.router.navigateByUrl('products/information');
  }
}
