import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthenticationGuard } from '../login/authentication.guard';
import { MatTableDataSource } from '@angular/material';

export interface SalColumns {
  typeMovement: string;
  valueMovement: number;
  dateMovement: string;
  tpAccount: string;
  tpIdentification: number;
  tpName: string;
  approval: boolean;
}

const ELEMENT_DATA: SalColumns[] = [
  {
    typeMovement: 'SEND',
    valueMovement: 4654654654,
    dateMovement: '20-08-2019 10:00:00',
    tpAccount: '*5645',
    tpIdentification: 45365345345,
    tpName: 'FULANITO',
    approval: true
  },
  {
    typeMovement: 'SEND',
    valueMovement: 4654654654,
    dateMovement: '20-08-2019 10:00:00',
    tpAccount: '*5645',
    tpIdentification: 45365345345,
    tpName: 'FULANITO',
    approval: false
  },
  {
    typeMovement: 'SEND',
    valueMovement: 4654654654,
    dateMovement: '20-08-2019 10:00:00',
    tpAccount: '*5645',
    tpIdentification: 45365345345,
    tpName: 'FULANITO',
    approval: true
  },
  {
    typeMovement: 'SEND',
    valueMovement: 4654654654,
    dateMovement: '20-08-2019 10:00:00',
    tpAccount: '*5645',
    tpIdentification: 45365345345,
    tpName: 'FULANITO',
    approval: false
  },  {
    typeMovement: 'SEND',
    valueMovement: 4654654654,
    dateMovement: '20-08-2019 10:00:00',
    tpAccount: '*5645',
    tpIdentification: 45365345345,
    tpName: 'FULANITO',
    approval: false
  }
];

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.pug',
  styleUrls: ['./movements.component.sass'],
  providers: [AuthenticationGuard]
})

@NgModule({
  bootstrap: [AppComponent]
})

export class MovementsComponent implements OnInit {

  name: 'Salamandra';
  balanceGroup: FormGroup;
  displayedColumns: string[] = ['typeMovement', 'valueMovement', 'dateMovement', 'tpAccount', 'tpIdentification', 'tpName', 'approval'];
  sourceData = new MatTableDataSource<SalColumns>(ELEMENT_DATA);

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.balanceGroup = new FormGroup({
      balance: new FormControl({value: 'PLATICA', disabled: true}, Validators.required),
    });
  }
}
