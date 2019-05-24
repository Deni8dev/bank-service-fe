import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.pug',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  userName = 'Salamandra';

  constructor() {
  }

  ngOnInit() {
  }

}
