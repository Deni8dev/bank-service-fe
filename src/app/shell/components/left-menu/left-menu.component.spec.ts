import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuComponent } from './left-menu.component';
import { MaterialModule } from '@app/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LeftMenuComponent', () => {
  let component: LeftMenuComponent;
  let fixture: ComponentFixture<LeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        RouterTestingModule
      ],
      declarations: [LeftMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init variables as expected', () => {
    // Arrange
    component.navigationCollapsed = false;

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.menus.DMS.expanded).toBe(false);
    expect(component.navigationCollapsed).toBe(false);
    expect(component.menuHeight).toBe('56px');
  });

  it('should send message saying that navigation must be expanded', () => {
    // Arrange
    component.navigationCollapsed = true;
    expect(component.menus.DMS.expanded).toBe(false);

    // Act
    component.onClickDMSMenu();
    fixture.detectChanges();

    // Assert
    expect(component.navigationCollapsed).toBe(true);
    expect(component.menus.DMS.expanded).toBe(true);
  });

  it('should not send message', () => {
    // Act
    component.onClickDMSMenu();
    fixture.detectChanges();

    // Assert
    expect(component.navigationCollapsed).toBe(undefined);
  });
});
