import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {
  plan;
  formFields;
  paymentMethod;

  formGroup: {};

  info_form: FormGroup;

  constructor(private formServ: FormService, 
              public formBuilder: FormBuilder,
              private router: Router) {

    this.formServ.getFields();

    this.formServ.fields.subscribe(data => {
      this.formFields = data.fields;

      this.formGroup = new Object;

      this.formFields.forEach(el => {
        let pattern;
        if (el.validators) {
          el.validators.forEach(val => val.pattern ? pattern = val.pattern: pattern = "[a-z]{1,15}");
        } else {
          pattern = "[a-z]{1,15}"
        }
        
        if (el.id !== "paymentmethod") {
          this.formGroup[el.id] = new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern(pattern)
          ]))
        } else {
          this.formGroup[el.id] = new FormControl('', Validators.required)
        }
      });

      this.info_form = this.formBuilder.group(this.formGroup);
    })
  }

  ngOnInit() {
  }

  onSubmit(val) {
    this.formServ.formFields.next(val);
    this.router.navigateByUrl('products/billing');
  }
}
