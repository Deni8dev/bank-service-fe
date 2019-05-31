import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { ShellComponent } from './shell.component';
import { MaterialModule } from '../material.module';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { RouterModule } from '@angular/router';
import { LeftToolbarComponent } from './components/left-toolbar/left-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdenticonDirective } from './components/left-toolbar/identicon.directive';
import { AuthenticationGuard } from '../login/authentication.guard';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [
    ShellComponent,
    LeftNavigationComponent,
    LeftToolbarComponent,
    LeftMenuComponent,
    IdenticonDirective
  ],
  providers: [
    AuthenticationGuard
  ]

})
export class ShellModule {
}
