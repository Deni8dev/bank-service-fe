import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.pug',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profileGroup: FormGroup;
  accountGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  edit() {
    console.error('Login in ' + this.profileGroup.getRawValue());
  }

  private buildForm() {
    this.profileGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      identificationType: new FormControl('', Validators.required),
      identification: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    })
    ;
    this.accountGroup = new FormGroup({
      account: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }

}
