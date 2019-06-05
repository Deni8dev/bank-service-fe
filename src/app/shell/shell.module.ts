import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { LeftToolbarComponent } from './components/left-toolbar/left-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdenticonDirective } from './components/left-toolbar/identicon.directive';
import { AuthenticationGuard } from '../login/authentication.guard';
import { CookieService } from 'ngx-cookie-service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    ShellComponent,
    LeftToolbarComponent,
    IdenticonDirective,
    NavigationComponent
  ],
  providers: [AuthenticationGuard, CookieService]

})
export class ShellModule {
}
