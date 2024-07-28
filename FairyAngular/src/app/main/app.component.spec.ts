// app.component.spec.ts - Especificaciones de prueba para el componente principal de la aplicación Angular

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Describe el conjunto de pruebas para AppComponent
describe('AppComponent', () => {
  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // Importa el módulo de pruebas de enrutamiento
        RouterTestingModule
      ],
      declarations: [
        // Declara el componente a probar
        AppComponent
      ],
    }).compileComponents(); // Compila los componentes
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Verifica que el componente se haya creado
    expect(app).toBeTruthy();
  });

  // Prueba para verificar que el título del componente sea 'FairyAngular'
  it(`should have as title 'FairyAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Verifica que el título sea el esperado
    expect(app.title).toEqual('FairyAngular');
  });

  // Prueba para verificar que el título se renderiza correctamente en la plantilla
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Detecta los cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica que el título renderizado contenga 'Hello, FairyAngular'
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, FairyAngular');
  });
});
