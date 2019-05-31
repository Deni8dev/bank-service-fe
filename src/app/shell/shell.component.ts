import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.pug',
  styleUrls: ['./shell.component.sass']
})
export class ShellComponent implements OnInit {

  collapsedMenu = false;

  constructor() {
  }

  ngOnInit() {
  }

  onToggleMenuEvent(toggleMenu: boolean) {
    this.collapsedMenu = toggleMenu;
  }
}
