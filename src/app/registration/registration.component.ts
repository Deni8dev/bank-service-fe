import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.pug',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationGroup: FormGroup;
  title = 'Salamandra Bank';

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  registerUser() {
    this.registrationService
      .registerUser(this.registrationGroup.getRawValue())
      .subscribe(() => console.log('registered'));
  }

  private buildForm() {
    this.registrationGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      identificationType: new FormControl('', Validators.required),
      identification: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

}
