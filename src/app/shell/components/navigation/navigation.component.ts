import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/login.service';
import { User } from '../../../dto/user.dto';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.pug',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  user: User;
  now = new Date();

  constructor(private router: Router, private loginService: LoginService) {
    this.user = this.loginService.sessionUserStorage();
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {
  }

  signOut() {
    this.loginService
      .logout()
      .subscribe(() => this.router.navigate(['/'], {replaceUrl: true}));
  }
}
