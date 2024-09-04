// auth.component.spec.ts - Especificaciones de prueba para el componente principal de autenticación de la aplicación Angular

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

// Descripción del conjunto de pruebas para AuthComponent
describe('AuthComponent', () => {
  let component: AuthComponent; // Variable para almacenar la instancia del componente
  let fixture: ComponentFixture<AuthComponent>; // Variable para almacenar el fixture del componente

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [AuthComponent] // Declaración del componente que se va a probar
    })
    .compileComponents(); // Compila los componentes

    // Crea una instancia del componente y el fixture asociado
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    // Verifica que el componente haya sido creado exitosamente
    expect(component).toBeTruthy();
  });
});
