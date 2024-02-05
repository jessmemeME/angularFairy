import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPermissionsComponent } from './auth-permissions.component';

describe('AuthPermissionsComponent', () => {
  let component: AuthPermissionsComponent;
  let fixture: ComponentFixture<AuthPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthPermissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
