import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFormComponent } from './finance-form.component';

describe('FinanceFormComponent', () => {
  let component: FinanceFormComponent;
  let fixture: ComponentFixture<FinanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinanceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
