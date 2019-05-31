import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { LeftNavigationComponent } from './left-navigation.component';
import { MaterialModule } from '@app/material.module';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { LeftToolbarComponent } from '../left-toolbar/left-toolbar.component';
import { AuthenticationService } from '@app/data-providers';
import { CookieService } from 'ngx-cookie-service';

describe('LeftNavigationComponent', () => {
  let component: LeftNavigationComponent;
  let fixture: ComponentFixture<LeftNavigationComponent>;
  let cookieService: CookieService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [LeftNavigationComponent, LeftToolbarComponent, LeftMenuComponent]
    }).compileComponents();
  }));

  beforeEach(inject([
    CookieService
  ], (
    _cookieService: CookieService) => {
    cookieService = _cookieService;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cookieService.set(AuthenticationService.sessionStorageKey, '{"user":{"activeCompany": {"name": "companyTest"}}}');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
