// global-communication.service.spec.ts - Especificaciones de prueba para el servicio de comunicación global

import { TestBed } from '@angular/core/testing';

import { GlobalCommunicationService } from './global-communication.service';

// Descripción del conjunto de pruebas para GlobalCommunicationService
describe('GlobalCommunicationService', () => {
  let service: GlobalCommunicationService; // Variable para almacenar la instancia del servicio

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(() => {
    // Configuración del módulo de pruebas
    TestBed.configureTestingModule({});
    // Inyección del servicio de comunicación global
    service = TestBed.inject(GlobalCommunicationService);
  });

  // Prueba para verificar que el servicio se crea correctamente
  it('should be created', () => {
    // Verifica que el servicio haya sido creado exitosamente
    expect(service).toBeTruthy();
  });
});
