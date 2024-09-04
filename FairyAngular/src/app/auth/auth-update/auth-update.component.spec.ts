// auth-update.component.spec.ts - Especificaciones de prueba para el componente de actualización de roles de autenticación

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUpdateComponent } from './auth-update.component';

// Descripción del conjunto de pruebas para AuthUpdateComponent
describe('AuthUpdateComponent', () => {
  let component: AuthUpdateComponent; // Variable para almacenar la instancia del componente
  let fixture: ComponentFixture<AuthUpdateComponent>; // Variable para almacenar el fixture del componente

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [AuthUpdateComponent] // Declaración del componente que se va a probar
    })
    .compileComponents(); // Compila los componentes

    // Crea una instancia del componente y el fixture asociado
    fixture = TestBed.createComponent(AuthUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    // Verifica que el componente haya sido creado exitosamente
    expect(component).toBeTruthy();
  });
});
