import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from './transactions.service';
import { LoginService } from '../login/login.service';
import { ProfileService } from '../profile/profile.service';
import { Account } from '../dto/account.dto';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.pug',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {

  transactionsGroup: FormGroup;
  account: Account;

  constructor(private transactionsService: TransactionsService,
              private loginService: LoginService,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserAccount(this.loginService.sessionUserStorage().id)
      .subscribe(account => this.account = account);
    this.buildForm();
  }

  doTransaction() {
    this.transactionsService.saveTransaction(this.transactionsGroup.getRawValue());
  }

  private buildForm() {
    this.transactionsGroup = new FormGroup({
      originAccount: new FormControl({ disabled: true }, Validators.required),
      valueMovement: new FormControl('', {
        updateOn: 'change',
        validators: [
          Validators.required,
          Validators.min(10000)
        ]
      }),
      targetAccount: new FormControl('', {
        updateOn: 'change',
        validators: [
          Validators.required,
          Validators.min(1000000000000000)
        ]
      })
    });
  }

}
