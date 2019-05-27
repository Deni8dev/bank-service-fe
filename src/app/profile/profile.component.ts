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
  userName = 'Salamandra';

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
      username: new FormControl('', Validators.required),
    });
    this.accountGroup = new FormGroup({
      account: new FormControl('', Validators.required),
    });
  }

}
