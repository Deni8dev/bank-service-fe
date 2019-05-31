import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftToolbarComponent } from './left-toolbar.component';
import { IdenticonDirective } from './identicon.directive';
import { AuthenticationServiceMock } from '@shared/testing/fake-services/fake-services.module';
import { MaterialModule } from '../../../material.module';
import { LoginService } from '../../../login/login.service';

describe('LeftToolbarComponent', () => {
  let component: LeftToolbarComponent;
  let fixture: ComponentFixture<LeftToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [LeftToolbarComponent, IdenticonDirective],
      providers: [
        { provide: LoginService, useClass: AuthenticationServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
