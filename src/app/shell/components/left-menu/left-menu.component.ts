import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

// TODO: expose into a static class
export interface Menus {
  DMS: { expanded: boolean };
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.pug',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent implements OnInit {

  @Input() menus: Menus;
  @Input() navigationCollapsed: boolean;

  @Output() expansionMenuEvent = new EventEmitter<boolean>();

  readonly menuHeight = '56px';

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.router.url.length > 4) {
      this.menus = {DMS: {expanded: true}};
    } else {
      this.menus = {DMS: {expanded: false}};
    }
  }

  onClickDMSMenu() {
    this.menus.DMS.expanded = !this.menus.DMS.expanded;
    if (this.navigationCollapsed) {
      this.expansionMenuEvent.emit(!this.navigationCollapsed);
    }
  }
}
