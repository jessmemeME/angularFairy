import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cliente-register',
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.css']
})
export class ClienteRegisterComponent implements OnInit {
  clienteForm!: FormGroup;
  showEspecificarOtro: boolean = false;
  departamentos: string[] = ['Asunción', 'Central', 'Cordillera', 'Guairá', 'Caaguazú', 'Caazapá', 'Itapúa', 'Misiones', 'Paraguarí', 'Alto Paraná', 'Ñeembucú', 'Amambay', 'Canindeyú', 'Presidente Hayes', 'Boquerón', 'Alto Paraguay', 'Concepción'];
  ciudades: string[] = [];
  ciudadesPorDepartamento: Record<string, string[]> = {
    'Asunción': ['Asunción'],
    'Central': ['San Lorenzo', 'Fernando de la Mora', 'Lambaré', 'Luque', 'Areguá', 'Capiatá', 'Guarambaré', 'Itá', 'Itauguá', 'Limpio', 'Mariano Roque Alonso', 'Nueva Italia', 'Ñemby', 'San Antonio', 'Villa Elisa', 'Villeta', 'Ypacaraí', 'Ypané'],
  };

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      datosBasicos: this.fb.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        tipoDocumento: ['', Validators.required],
        numeroDocumento: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      datosPersonales: this.fb.group({
        genero: ['', Validators.required],
        especificarOtro: [''],
        fechaNacimiento: ['', Validators.required],
        edad: new FormControl({ value: '', disabled: true }, Validators.required)
      }),
      ubicaciones: this.fb.array([this.crearUbicacion()]),
      contactos: this.fb.array([this.crearContacto()]),
      redesSociales: this.fb.array([this.crearRedSocial()]),
      facturacion: this.fb.array([this.crearDatoFacturacion()])
    });

    this.onChanges();
  }

  ngOnInit(): void {}

  private onChanges(): void {
    this.clienteForm.get('datosPersonales.genero')?.valueChanges.subscribe((value) => {
      this.showEspecificarOtro = value === 'Otro';
      this.updateEspecificarOtroValidators(value);
    });

    this.clienteForm.get('datosPersonales.fechaNacimiento')?.valueChanges.subscribe((fechaNacimiento) => {
      const edadCalculada = this.calcularEdad(fechaNacimiento);
      this.clienteForm.get('datosPersonales.edad')?.setValue(edadCalculada, { emitEvent: false });
    });
  }

  private updateEspecificarOtroValidators(genero: string): void {
    const especificarOtroControl = this.clienteForm.get('datosPersonales.especificarOtro');
    if (genero === 'Otro') {
      especificarOtroControl?.setValidators([Validators.required]);
    } else {
      especificarOtroControl?.clearValidators();
    }
    especificarOtroControl?.updateValueAndValidity();
  }

  calcularEdad(fechaNacimiento: string | null): number {
    if (!fechaNacimiento) return 0;
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  crearUbicacion(): FormGroup {
    return this.fb.group({
      nombreUbicacion: ['', Validators.required],
      callePrincipal: ['', Validators.required],
      calleSecundaria: ['', Validators.required],
      numeroCasa: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      ubicacionMaps: [''],
      observacion: [''],
      estadoUbicacion: ['', Validators.required]
    });
  }

  crearContacto(): FormGroup {
    return this.fb.group({
      tipoContacto: ['', Validators.required],
      contacto: ['', Validators.required],
      contactoPrincipal: [false],
      estadoContacto: ['', Validators.required]
    });
  }

  crearRedSocial(): FormGroup {
    return this.fb.group({
      tipoRedSocial: ['', Validators.required],
      usuario: ['', Validators.required],
      enlace: ['', Validators.required],
      estadoRedSocial: ['', Validators.required]
    });
  }

  crearDatoFacturacion(): FormGroup {
    return this.fb.group({
      ruc: ['', Validators.required],
      razonSocial: ['', Validators.required],
      facturacionPrincipal: [false],
      estadoFacturacion: ['', Validators.required]
    });
  }

  agregarUbicacion() {
    this.ubicaciones.push(this.crearUbicacion());
  }

  agregarContacto() {
    this.contactos.push(this.crearContacto());
  }

  agregarRedSocial() {
    this.redesSociales.push(this.crearRedSocial());
  }

  agregarDatoFacturacion() {
    this.facturacion.push(this.crearDatoFacturacion());
  }

  submit() {
    if (this.clienteForm.valid) {
      console.log('Datos del cliente:', this.clienteForm.value);
    } else {
      console.error('El formulario no es válido.');
    }
  }

  get datosBasicosControl(): FormGroup {
    return this.clienteForm.get('datosBasicos') as FormGroup;
  }

  get datosPersonalesControl(): FormGroup {
    return this.clienteForm.get('datosPersonales') as FormGroup;
  }

  get ubicaciones(): FormArray {
    return this.clienteForm.get('ubicaciones') as FormArray;
  }

  get contactos(): FormArray {
    return this.clienteForm.get('contactos') as FormArray;
  }

  get redesSociales(): FormArray {
    return this.clienteForm.get('redesSociales') as FormArray;
  }

  get facturacion(): FormArray {
    return this.clienteForm.get('facturacion') as FormArray;
  }

  onDepartamentoChange(departamento: string) {
    this.ciudades = this.ciudadesPorDepartamento[departamento] || [];
  }
}
