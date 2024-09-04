// auth-list.component.spec.ts - Especificaciones de prueba para el componente de lista de roles de autenticación

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthListComponent } from './auth-list.component';

// Descripción del conjunto de pruebas para AuthListComponent
describe('AuthListComponent', () => {
  let component: AuthListComponent; // Variable para almacenar la instancia del componente
  let fixture: ComponentFixture<AuthListComponent>; // Variable para almacenar el fixture del componente

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [AuthListComponent] // Declaración del componente que se va a probar
    })
    .compileComponents(); // Compila los componentes

    // Crea una instancia del componente y el fixture asociado
    fixture = TestBed.createComponent(AuthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    // Verifica que el componente haya sido creado exitosamente
    expect(component).toBeTruthy();
  });
});
