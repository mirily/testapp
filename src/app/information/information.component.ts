import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/information.json';

const fields = (<any>data).fields;

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {
  formFields;
  constructor() {
    this.formFields = fields;
    console.log(fields);
  }

  ngOnInit() {
  }

}
