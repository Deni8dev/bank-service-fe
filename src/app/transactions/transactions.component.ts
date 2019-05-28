import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.pug',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {

  name: 'Salamandra';
  transactionsGroup: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  doTransaction() {
    console.error('Login in ' + this.transactionsGroup.getRawValue());
  }

  goToProfile() {
    this.router.navigate(['/profile'], {replaceUrl: true});
  }

  private buildForm() {
    this.transactionsGroup = new FormGroup({
      typeMovement: new FormControl('', Validators.required),
      valueMovement: new FormControl('', Validators.required),
      dateMovement: new FormControl('', Validators.required),
      tpAccount: new FormControl('', Validators.required),
      tpIdentification: new FormControl('', Validators.required),
      tpName: new FormControl('', Validators.required)
    });
  }

}
