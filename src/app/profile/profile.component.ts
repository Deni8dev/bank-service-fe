import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { LoginService } from '../login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../dto/user.dto';
import { Account } from '../dto/account.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.pug',
  styleUrls: ['./profile.component.sass'],
  providers: [ProfileService, LoginService, CookieService]
})
export class ProfileComponent implements OnInit {

  profileGroup: FormGroup;
  accountGroup: FormGroup;

  account: Account;
  user: User;

  constructor(private cookieService: CookieService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get(LoginService.sessionStorageKey));
    this.profileService
      .getUserAccount(this.user.id)
      .subscribe(data => {
        this.account = data;
        this.buildForm();
      });
  }

  edit() {
    console.error('Login in ' + this.profileGroup.getRawValue());
  }

  private buildForm() {
    this.profileGroup = new FormGroup({
      name: new FormControl({value: this.user.name, disabled: true}, Validators.required),
      lastName: new FormControl({value: this.user.lastName, disabled: true}, Validators.required),
      email: new FormControl({value: this.user.email, disabled: true}, Validators.required),
      identificationType: new FormControl({value: this.user.userIdType, disabled: true}, Validators.required),
      identification: new FormControl({value: this.user.userId, disabled: true}, Validators.required),
      phone: new FormControl({value: this.user.phone, disabled: true}, Validators.required),
      address: new FormControl({value: this.user.address, disabled: true}, Validators.required),
      country: new FormControl({value: this.user.country, disabled: true}, Validators.required),
      gender: new FormControl({value: this.user.gender, disabled: true}, Validators.required)
    });
    this.accountGroup = new FormGroup({
      account: new FormControl({value: this.account.accountNumber, disabled: true}, Validators.required)
    });
  }

}
