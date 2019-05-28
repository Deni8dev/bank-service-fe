import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.pug',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationGroup: FormGroup;
  title = 'Salamandra Bank';

  constructor() {
  }

  ngOnInit() {
  }

  Registration() {
    console.error('Login in ' + this.registrationGroup.getRawValue());
  }
}
