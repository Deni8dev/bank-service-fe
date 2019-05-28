import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.sass'],
  providers: [LoginService, CookieService]
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  title = 'Salamandra Bank';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    this.loginService
      .login(this.loginGroup.get('username').value, this.loginGroup.getRawValue().password)
      .subscribe(value => {
        if (value) {
          this.router.navigate(['profile'], {replaceUrl: true});
        }
      });
  }

  private buildForm() {
    this.loginGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
