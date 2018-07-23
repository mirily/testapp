import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {
  plan;
  formFields;
  constructor(private formServ: FormService) {
    this.formServ.getFields();
    this.formServ.fields.subscribe(data => {
      this.formFields = data.fields;
    })
    this.formServ.selectPLan.subscribe(data => {
      this.plan = data;
      console.log(this.plan)
    })
  }

  ngOnInit() {
  }

}
