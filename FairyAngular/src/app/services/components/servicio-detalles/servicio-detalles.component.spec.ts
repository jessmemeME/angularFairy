import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDetallesComponent } from './servicio-detalles.component';

describe('ServicioDetallesComponent', () => {
  let component: ServicioDetallesComponent;
  let fixture: ComponentFixture<ServicioDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
