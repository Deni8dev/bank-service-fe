import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) { }

  canActivate(): boolean {
    if (!this.loginService.isAuthenticated())
      return true;

    this.router.navigate(['/'], { replaceUrl: true });
    return false;
  }

}
