import { Component, EventEmitter, Output} from '@angular/core';
import { Menus } from '../left-menu/left-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.pug',
  styleUrls: ['./left-navigation.component.sass']
})
export class LeftNavigationComponent {

  @Output() toggleMenuEvent = new EventEmitter<boolean>();

  menus: Menus;
  navigationCollapsed: boolean;

  constructor(private router: Router) { }

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
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
