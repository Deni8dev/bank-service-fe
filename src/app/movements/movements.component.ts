import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthenticationGuard } from '../login/authentication.guard';
import { MatTableDataSource } from '@angular/material';
import { MovementsService } from './movements.service';
import { Movement } from '../dto/movement.dto';
import { LoginService } from '../login/login.service';
import { ProfileService } from '../profile/profile.service';

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
  balance: number;
  displayedColumns: string[] = ['typeMovement', 'valueMovement', 'dateMovement', 'tpAccount', 'tpIdentification', 'tpName', 'approval'];
  sourceData = new MatTableDataSource<Movement>();

  constructor(private movementsService: MovementsService,
              private loginService: LoginService,
              private profileService: ProfileService) {
    this.profileService.getUserAccount(this.loginService.sessionUserStorage().id)
      .subscribe(account => {
        this.balance = account.balance;
        this.movementsService
          .getMovements(account.id)
          .subscribe(movements => this.sourceData.data = movements);
      });
  }

  ngOnInit() { }
}
