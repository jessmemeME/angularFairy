import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponenteComponent } from './payment-componente.component';

describe('PaymentComponenteComponent', () => {
  let component: PaymentComponenteComponent;
  let fixture: ComponentFixture<PaymentComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
