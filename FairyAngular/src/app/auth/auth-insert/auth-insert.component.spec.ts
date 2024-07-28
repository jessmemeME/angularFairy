// auth-insert.component.spec.ts - Especificaciones de prueba para el componente de inserción de roles de autenticación

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInsertComponent } from './auth-insert.component';

// Descripción del conjunto de pruebas para AuthInsertComponent
describe('AuthInsertComponent', () => {
  let component: AuthInsertComponent; // Variable para almacenar la instancia del componente
  let fixture: ComponentFixture<AuthInsertComponent>; // Variable para almacenar el fixture del componente

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [AuthInsertComponent] // Declaración del componente que se va a probar
    })
    .compileComponents(); // Compila los componentes

    // Crea una instancia del componente y el fixture asociado
    fixture = TestBed.createComponent(AuthInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    // Verifica que el componente haya sido creado exitosamente
    expect(component).toBeTruthy();
  });
});
