import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeComponent } from './authorize.component';
import { AuthService } from '../../shared/index';

class AuthServiceSpy {
  endSigninMainWindow = jasmine.createSpy('endSigninMainWindow')
    .and.callFake(
      () => {} // void response

    );
}

describe('AuthorizeComponent', () => {
  let component: AuthorizeComponent;
  let fixture: ComponentFixture<AuthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeComponent ]
    })
    .overrideComponent(AuthorizeComponent, {
            set: {
        providers: [
          { provide: AuthService, useClass: AuthServiceSpy }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
