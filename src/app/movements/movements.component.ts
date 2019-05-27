import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.pug',
  styleUrls: ['./movements.component.sass']
})
export class MovementsComponent implements OnInit {

  name: 'Salamandra';
  movementsGroup: FormGroup;
  balanceGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.movementsGroup = new FormGroup({
      typeMovement: new FormControl('', Validators.required),
      valueMovement: new FormControl('', Validators.required),
      dateMovement: new FormControl('', Validators.required),
      tpAccount: new FormControl('', Validators.required),
      tpIdentification: new FormControl('', Validators.required),
      tpName: new FormControl('', Validators.required),
      approval: new FormControl('', Validators.required),
    });
    this.balanceGroup = new FormGroup({
      balance: new FormControl('', Validators.required),
    });
  }
}
