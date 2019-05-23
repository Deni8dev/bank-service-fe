import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    console.error('Login in ' + this.loginGroup.getRawValue());
  }

  private buildForm() {
    this.loginGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
}
