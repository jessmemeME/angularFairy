import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInsertComponent } from './auth-insert.component';

describe('AuthInsertComponent', () => {
  let component: AuthInsertComponent;
  let fixture: ComponentFixture<AuthInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
