import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorComponenteComponent } from './vendor-componente.component';

describe('VendorComponenteComponent', () => {
  let component: VendorComponenteComponent;
  let fixture: ComponentFixture<VendorComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
