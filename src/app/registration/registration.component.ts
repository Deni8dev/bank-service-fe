import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.pug',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  registrationGroup: FormGroup;
  title = 'Salamandra Bank';
  genders: Gender[] = [
    {value: 'Male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'},
    {value: 'other-3', viewValue: 'Other'}
  ];
  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.registrationGroup = new FormGroup({
      typeMovement: new FormControl('', Validators.required),
      valueMovement: new FormControl('', Validators.required),
      dateMovement: new FormControl('', Validators.required),
      tpAccount: new FormControl('', Validators.required),
      tpIdentification: new FormControl('', Validators.required),
      tpName: new FormControl('', Validators.required)
    });
  }
  Registration() {
    console.error('Login in ' + this.registrationGroup.getRawValue());
  }
}
