import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.less']
})
export class BillingComponent implements OnInit {
  plan;
  infoFields;
  readyForm = false;
  answerType = false;

  card_form;

  constructor(private formServ: FormService,
              public formBuilder: FormBuilder) {
    
    this.formServ.selectPLan.subscribe(data => {
      this.plan = data;
    })
    this.formServ.formFields.subscribe(data => {
      this.infoFields = data;
      console.log(data)
    })
  }

  ngOnInit() {
    this.card_form = this.formBuilder.group({      
      number: new FormControl('',  Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{16}')
      ])),
      month: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{2}')
      ])),
      cvc: new FormControl('',  Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{3}')
      ])),
      year: new FormControl('',  Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{4}')
      ])),
    });
  }

  showAnswer() {
    if (this.infoFields && this.plan) {
      this.answerType = true;
    } else {
      this.answerType = false;
    }
    this.readyForm = true;
  }

  hideAnswer() {
    this.readyForm = false;
  }

}
