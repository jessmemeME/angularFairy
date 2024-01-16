import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthListComponent } from './auth-list.component';

describe('AuthListComponent', () => {
  let component: AuthListComponent;
  let fixture: ComponentFixture<AuthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
