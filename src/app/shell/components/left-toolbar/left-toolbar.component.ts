import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { User } from '../../../dto/user.dto';

@Component({
  selector: 'app-left-toolbar',
  templateUrl: './left-toolbar.component.html',
  styleUrls: ['./left-toolbar.component.sass'],
})
export class LeftToolbarComponent implements OnInit {

  @Input() navigationCollapsed: boolean;

  loggedUser: User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loggedUser = this.loginService.sessionUserStorage();
  }

}
