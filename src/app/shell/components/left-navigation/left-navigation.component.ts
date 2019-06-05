import { Component, EventEmitter, Output} from '@angular/core';
import { Menus } from '../left-menu/left-menu.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/login.service';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.pug',
  styleUrls: ['./left-navigation.component.sass']
})
export class LeftNavigationComponent {

  @Output() toggleMenuEvent = new EventEmitter<boolean>();

  menus: Menus;
  navigationCollapsed: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  onToggleMenuClicked() {
    this.navigationCollapsed = !this.navigationCollapsed;
    this.toggleMenuEvent.emit(this.navigationCollapsed);
    // TODO: Verify if needed expand menu when expand navigation nav
    this.menus = { DMS: { expanded: false } };
  }

  onMenuItemClicked(navCollapsed: boolean) {
    this.navigationCollapsed = navCollapsed;
    this.toggleMenuEvent.emit(navCollapsed);
  }

  signOut() {
    this.loginService
      .logout()
      .subscribe(() => this.router.navigate(['/'], { replaceUrl: true }));
  }
}
