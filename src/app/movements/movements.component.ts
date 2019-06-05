import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { RegistrationComponent } from '../registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationGuard } from '../login/authentication.guard';

export interface SalColumns {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: SalColumns[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.pug',
  styleUrls: ['./movements.component.sass']
})

@NgModule({
  declarations: [
  ],
  imports: [
    MatTableModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})

export class MovementsComponent implements OnInit {

  name: 'Salamandra';
  movementsGroup: FormGroup;
  balanceGroup: FormGroup;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<SalColumns>(ELEMENT_DATA);
  movementsData: SalColumns;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.retrieveDisplayedColumns();
    this.buildForm();
  }

  goToProfile() {
    this.router.navigate(['/profile'], {replaceUrl: true});
  }

  retrieveDisplayedColumns() {
    // @ts-ignore
    this.displayedColumns = this.movementsData.name;
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
