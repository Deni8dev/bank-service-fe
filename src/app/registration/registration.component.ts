import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { User } from '../dto/user.dto';
import { Gender } from '../dto/gender.dto';
import { UserTypeId } from '../dto/user-type-id.dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.pug',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationGroup: FormGroup;
  model: User;
  genderArray = [
    { value: Gender.MALE, viewValue: 'Male' },
    { value: Gender.FEMALE, viewValue: 'Female' }
  ];
  idTypeArray = [
    { value: UserTypeId.ID_CARD, viewValue: 'F I Card' },
    { value: UserTypeId.FI_CARD, viewValue: 'Identification Card' },
    { value: UserTypeId.PASSPORT, viewValue: 'Passport' }
  ];

  error: boolean;

  constructor(private router: Router, private registrationService: RegistrationService) { }

  ngOnInit() {
    this.model = new User();
    this.buildForm();
  }

  registerUser() {
    this.registrationService
      .registerUser(this.model)
      .subscribe(registered => {
        if (registered) {
          this.error = false;
          this.router.navigate(['/']).finally();
        } else
          this.error = true;
      });
  }

  private buildForm() {
    this.registrationGroup = new FormGroup({
      identificationType: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });
  }

}
