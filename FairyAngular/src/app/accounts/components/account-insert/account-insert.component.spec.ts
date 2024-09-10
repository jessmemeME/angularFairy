import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInsertComponent } from './account-insert.component';

describe('AccountInsertComponent', () => {
  let component: AccountInsertComponent;
  let fixture: ComponentFixture<AccountInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
