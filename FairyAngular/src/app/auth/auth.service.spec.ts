// auth.service.spec.ts - Especificaciones de prueba para el servicio de autenticación y autorización de la aplicación Angular

import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

// Descripción del conjunto de pruebas para AuthService
describe('AuthService', () => {
  let service: AuthService; // Variable para almacenar la instancia del servicio

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(() => {
    // Configuración del módulo de pruebas
    TestBed.configureTestingModule({});
    // Inyección del servicio de autenticación
    service = TestBed.inject(AuthService);
  });

  // Prueba para verificar que el servicio se crea correctamente
  it('should be created', () => {
    // Verifica que el servicio haya sido creado exitosamente
    expect(service).toBeTruthy();
  });
});
