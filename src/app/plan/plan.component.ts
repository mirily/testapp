import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/plans.json';

const plans = (<any>data).plans;

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.less']
})
export class PlanComponent implements OnInit {
  planList;
  constructor() {
    this.planList = plans;
  }

  ngOnInit() {
  }

}
