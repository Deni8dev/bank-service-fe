import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MovementsComponent } from './movements/movements.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  Shell.childRoutes([
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/movements', component: MovementsComponent },
    { path: 'profile/transactions', component: TransactionsComponent },
  ])
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
