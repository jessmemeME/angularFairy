import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPermissionsComponent } from './account-permissions.component';

describe('AccountPermissionsComponent', () => {
  let component: AccountPermissionsComponent;
  let fixture: ComponentFixture<AccountPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountPermissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
