import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUpdateComponent } from './auth-update.component';

describe('AuthUpdateComponent', () => {
  let component: AuthUpdateComponent;
  let fixture: ComponentFixture<AuthUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
