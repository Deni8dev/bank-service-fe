import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.pug',
  styleUrls: ['./movements.component.sass']
})
export class MovementsComponent implements OnInit {

  name: 'Salamandra';
  movementsGroup: FormGroup;
  balanceGroup: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  goToProfile() {
    this.router.navigate(['/profile'], {replaceUrl: true});
  }

  private buildForm() {
    this.movementsGroup = new FormGroup({
      typeMovement: new FormControl({value: '', disabled: true}, Validators.required),
      valueMovement: new FormControl({value: '', disabled: true}, Validators.required),
      dateMovement: new FormControl({value: '', disabled: true}, Validators.required),
      tpAccount: new FormControl({value: '', disabled: true}, Validators.required),
      tpIdentification: new FormControl({value: '', disabled: true}, Validators.required),
      tpName: new FormControl({value: '', disabled: true}, Validators.required),
      approval: new FormControl({value: '', disabled: true}, Validators.required),
    });
    this.balanceGroup = new FormGroup({
      balance: new FormControl({value: '', disabled: true}, Validators.required),
    });
  }
}
