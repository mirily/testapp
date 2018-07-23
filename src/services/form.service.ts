import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class FormService {
  public plans: ReplaySubject<any> = new ReplaySubject(1);
  
  public fields: ReplaySubject<any> = new ReplaySubject(1);

  public selectPLan:  ReplaySubject<any> = new ReplaySubject(1);
  
  constructor(private api: ApiService) { }

  getPlans() {
    this.api.get(`assets/json/plans.json`)
    .subscribe(
      (data) => {
        console.log(data)
        this.plans.next(data)
      },
      (err) => {
        console.error(err)
      })
      return this.plans.asObservable();
  }
  getFields() {
    this.api.get(`assets/json/information.json`)
    .subscribe(
      (data) => {
        console.log(data)
        this.fields.next(data)
      },
      (err) => {
        console.error(err)
      })
      return this.fields.asObservable();
  }
}