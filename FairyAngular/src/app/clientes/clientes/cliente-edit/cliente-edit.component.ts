import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router'; // Para obtener el ID del cliente a editar

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  clienteForm!: FormGroup;
  showEspecificarOtro: boolean = false;
  departamentos: string[] = ['Asunción', 'Central', 'Cordillera', 'Guairá', 'Caaguazú', 'Caazapá', 'Itapúa', 'Misiones', 'Paraguarí', 'Alto Paraná', 'Ñeembucú', 'Amambay', 'Canindeyú', 'Presidente Hayes', 'Boquerón', 'Alto Paraguay', 'Concepción'];
  ciudades: string[] = [];
  ciudadesPorDepartamento: Record<string, string[]> = {
    'Asunción': ['Asunción'],
    'Central': ['San Lorenzo', 'Fernando de la Mora', 'Lambaré', 'Luque', 'Areguá', 'Capiatá', 'Guarambaré', 'Itá', 'Itauguá', 'Limpio', 'Mariano Roque Alonso', 'Nueva Italia', 'Ñemby', 'San Antonio', 'Villa Elisa', 'Villeta', 'Ypacaraí', 'Ypané'],
    'Concepción': ['Concepción', 'Horqueta', 'Loreto', 'San Carlos del Apa', 'San Lázaro', 'Belén', 'Yby Yaú', 'Sargento José Félix López'],
    'San Pedro': ['San Pedro de Ycuamandiyú', 'Capiibary', 'Choré', 'General Elizardo Aquino', 'Guayaibí', 'Itacurubí del Rosario', 'Liberación', 'Lima', 'Nueva Germania', 'San Estanislao', 'Santa Rosa del Aguaray', 'Tacuatí', 'Unión', 'Villa del Rosario', 'Yataity del Norte'],
    'Cordillera': ['Caacupé', 'Altos', 'Atyrá', 'Arroyos y Esteros', 'Caraguatay', 'Emboscada', 'Eusebio Ayala', 'Isla Pucú', 'Itacurubí de la Cordillera', 'Juan de Mena', 'Loma Grande', 'Mbocayaty del Yhaguy', 'Piribebuy', 'Primero de Marzo', 'San Bernardino', 'Santa Elena', 'Tobatí', 'Valenzuela'],
    'Guairá': ['Villarrica', 'Borja', 'Capitán Mauricio José Troche', 'Doctor Bottrell', 'Félix Pérez Cardozo', 'Independencia', 'Iturbe', 'Mbocayaty', 'Natalicio Talavera', 'Ñumí', 'Paso Yobái', 'San Salvador', 'Yataity'],
    'Caaguazú': ['Coronel Oviedo', 'Caaguazú', 'Carayaó', 'Doctor Cecilio Báez', 'Doctor Juan Manuel Frutos', 'J. Eulogio Estigarribia', 'José Domingo Ocampos', 'La Pastora', 'Mcal. Francisco S. López', 'Nueva Londres', 'Raúl Arsenio Oviedo', 'Repatriación', 'San Joaquín', 'San José de los Arroyos', 'Simón Bolívar', 'Tembiaporá', 'Vaquería', 'Yhú'],
    'Caazapá': ['Caazapá', 'Abaí', 'Buena Vista', 'Doctor Moisés S. Bertoni', 'Fulgencio Yegros', 'General Higinio Morínigo', 'Maciel', 'San Juan Nepomuceno', 'Tavaí', 'Yuty'],
    'Itapúa': ['Encarnación', 'Alborada', 'Alto Verá', 'Bella Vista', 'Cambyretá', 'Capitán Meza', 'Capitán Miranda', 'Carmen del Paraná', 'Coronel Bogado', 'Edelira', 'Fram', 'General Artigas', 'General Delgado', 'Hohenau', 'Itapúa Poty', 'Jesús', 'La Paz', 'Mayor Otaño', 'Natalio', 'Nueva Alborada', 'Obligado', 'Pirapó', 'San Cosme y Damián', 'San Juan del Paraná', 'San Pedro del Paraná', 'Tomás Romero Pereira', 'Trinidad', 'Yatytay'],
    'Misiones': ['San Juan Bautista', 'Ayolas', 'San Ignacio', 'Santa Rosa', 'Santiago', 'San Miguel', 'San Patricio', 'Santa María', 'Yabebyry', 'Villa Florida'],
    'Paraguarí': ['Paraguarí', 'Acahay', 'Caapucú', 'Carapeguá', 'Escobar', 'Gral. Bernardino Caballero', 'La Colmena', 'Mbuyapey', 'Pirayú', 'Quyquyhó', 'San Roque González', 'Sapucai', 'Tebicuarymí', 'Yaguarón', 'Ybycuí', 'Ybytimí'],
    'Alto Paraná': ['Ciudad del Este', 'Domingo Martínez de Irala', 'Dr. Juan León Mallorquín', 'Hernandarias', 'Iruña', 'Itakyry', 'Los Cedrales', 'Mbaracayú', 'Minga Guazú', 'Minga Porã', 'Naranjal', 'Presidente Franco', 'San Alberto', 'San Cristóbal', 'Santa Fe del Paraná', 'Santa Rita', 'Santa Rosa del Monday'],
    'Ñeembucú': ['Pilar', 'Alberdi', 'Cerrito', 'Desmochados', 'Gral. José E. Díaz', 'Guazú Cuá', 'Humaitá', 'Isla Umbú', 'Laureles', 'Mayor Martínez', 'Paso de Patria', 'San Juan Bautista de Ñeembucú', 'Tacuaras', 'Villa Franca', 'Villa Oliva'],
    'Amambay': ['Pedro Juan Caballero', 'Bella Vista Norte', 'Capitán Bado', 'Karapaí', 'Zanja Pytã'],
    'Canindeyú': ['Salto del Guairá', 'Corpus Christi', 'Curuguaty', 'Gral. Francisco Caballero Álvarez', 'Itanará', 'Katueté', 'La Paloma', 'Nueva Esperanza', 'Villa Ygatimí', 'Yasy Cañy', 'Yby Pytã'],
    'Presidente Hayes': ['Villa Hayes', 'Benjamín Aceval', 'General Bruguez', 'José Falcón', 'Nanawa', 'Pozo Colorado', 'Puerto Pinasco', 'Teniente Esteban Martínez'],
    'Boquerón': ['Filadelfia', 'Mariscal Estigarribia', 'Loma Plata'],
    'Alto Paraguay': ['Fuerte Olimpo', 'Bahía Negra', 'Carmelo Peralta', 'Puerto Casado']
  };
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.clienteForm = this.fb.group({
      datosBasicos: this.fb.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        tipoDocumento: ['Cedula', Validators.required],
        numeroDocumento: ['', Validators.required],
        estado: ['Prospecto', Validators.required]
      }),
      datosPersonales: this.fb.group({
        genero: ['', Validators.required],
        especificarOtro: [''],
        fechaNacimiento: ['', [Validators.required, this.validarFormatoFecha]],
        edad: new FormControl({ value: '', disabled: true }, Validators.required)
      }),
      ubicaciones: this.fb.array([this.crearUbicacion()]),
      contactos: this.fb.array([this.crearContacto()]),
      redesSociales: this.fb.array([this.crearRedSocial()]),
      facturacion: this.fb.array([this.crearDatoFacturacion()])
    });

    this.onChangesGender();
    this.onChangesBirthdayDate();
  }

  ngOnInit(): void {
    // Obtén el ID del cliente desde la URL
    const clienteId = this.route.snapshot.paramMap.get('id');
    
    if (clienteId) {
      // Llama a la función para cargar los datos del cliente con el ID proporcionado
      this.cargarDatosCliente(clienteId);
    }
  }

  // Método para volver a la lista de clientes
  goBack(): void {
    this.router.navigate(['/clients']);  // Redirige a la página principal de clientes
  }
  cargarDatosCliente(id: string | null) {
    if (id) {
      const datosCliente = this.obtenerDatosCliente(id); 
      this.clienteForm.patchValue({
        datosBasicos: datosCliente.datosBasicos,
        datosPersonales: datosCliente.datosPersonales,
      });

      this.setFormArray('ubicaciones', datosCliente.ubicaciones);
      this.setFormArray('contactos', datosCliente.contactos);
      this.setFormArray('redesSociales', datosCliente.redesSociales);
      this.setFormArray('facturacion', datosCliente.facturacion);
    }
  }

  setFormArray(formArrayName: string, data: any[]) {
    const formArray = this.clienteForm.get(formArrayName) as FormArray;
    formArray.clear();
    data.forEach(item => formArray.push(this.fb.group(item)));
  }

  obtenerDatosCliente(id: string) {
    return {
      datosBasicos: {
        nombres: 'Juan',
        apellidos: 'Pérez',
        tipoDocumento: 'Cedula',
        numeroDocumento: '12345678',
        estado: 'Cliente Activo'
      },
      datosPersonales: {
        genero: 'Masculino',
        especificarOtro: '',
        fechaNacimiento: '01/01/1980',
        edad: 42
      },
      ubicaciones: [{ nombreUbicacion: 'Oficina', ubicacionPrincipal: true }],
      contactos: [{ tipoContacto: 'WhatsApp', contacto: '0981-123456', estadoContacto: 'Activo' }],
      redesSociales: [{ tipoRedSocial: 'Facebook', usuario: 'juan.perez', estadoRedSocial: 'Activo' }],
      facturacion: [{ ruc: '80012345-6', razonSocial: 'Empresa Juan Pérez', estadoFacturacion: 'Activo' }]
    };
  }

  //UBICACIONES
  crearUbicacion(): FormGroup {
    return this.fb.group({
      nombreUbicacion: ['', Validators.required],  // Este control debe estar aquí
      ubicacionPrincipal: [false],
      callePrincipal: ['', Validators.required],
      calleSecundaria: ['', Validators.required],
      numeroCasa: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      barrio: [''],
      ubicacionMaps: [''],
      observacion: [''],
      estadoUbicacion: ['', Validators.required]
    });
  }
  
  agregarUbicacion() {
    this.ubicaciones.push(this.crearUbicacion());
  }


  get ubicaciones(): FormArray {
    return this.clienteForm.get('ubicaciones') as FormArray;
  }


  onDepartamentoChange(departamento: string) {
    this.ciudades = this.ciudadesPorDepartamento[departamento] || [];
  }

  removerUbicacion(index: number): void {
    this.ubicaciones.removeAt(index);
  }
  
  onPrincipalChangeUbication(index: number): void {
    // Si se marca una ubicación como principal, desmarcar las demás
    this.ubicaciones.controls.forEach((control, i) => {
      if (i !== index) {
        control.get('ubicacionPrincipal')?.setValue(false, { emitEvent: false });
      }
    });
  }

 //---------------------------------------------------------
//CONTACTOS
agregarContacto(): void {
  this.contactos.push(this.crearContacto());
}

removerContacto(index: number): void {
  this.contactos.removeAt(index);
}

crearContacto(): FormGroup {
  return this.fb.group({
    tipoContacto: ['', Validators.required],
    contacto: ['', Validators.required],
    contactoPrincipal: [true],
    estadoContacto: ['Activo', Validators.required] // Valor por defecto "Activo"
  });
}

validarContactoPrincipal(index: number): void {
  this.contactos.controls.forEach((contacto, i) => {
    if (i !== index) {
      contacto.get('contactoPrincipal')?.setValue(false);
    }
  });
}

get contactos(): FormArray {
  return this.clienteForm.get('contactos') as FormArray;
}

//---------------------------------------------------------
//REDES SOCIALES
agregarRedSocial(): void {
  this.redesSociales.push(this.crearRedSocial());
}

removerRedSocial(index: number): void {
  this.redesSociales.removeAt(index);
}

crearRedSocial(): FormGroup {
  return this.fb.group({
    tipoRedSocial: ['', Validators.required],
    usuario: ['', Validators.required],
    enlace: [''],
    estadoRedSocial: ['Activo', Validators.required] // "Activo" por defecto
  });
}

get redesSociales(): FormArray {
  return this.clienteForm.get('redesSociales') as FormArray;
}

  //---------------------------------------------------------
  //FACTURACION
  crearDatoFacturacion(): FormGroup {
    return this.fb.group({
      ruc: ['', Validators.required],
      razonSocial: ['', Validators.required],
      facturacionPrincipal: [true],
      estadoFacturacion: ['Activo', Validators.required]
    });
  }


  agregarDatoFacturacion() {
    this.facturacion.push(this.crearDatoFacturacion());
  }

  get facturacion(): FormArray {
    return this.clienteForm.get('facturacion') as FormArray;
  }


   //DATOS PERSONALES
  //GENERO
  private onChangesGender(): void {
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
  //FECHA DE NACIMIENTO
  private onChangesBirthdayDate(): void {
    this.clienteForm.get('datosPersonales.fechaNacimiento')?.valueChanges.subscribe((fechaNacimiento) => {
      // Verifica si la fecha tiene el formato correcto y es una fecha válida
      if (this.validarFormatoFechaCorrecto(fechaNacimiento)) {
        // Si la fecha es válida, calcula la edad
        const edadCalculada = this.calcularEdad(fechaNacimiento);
        this.clienteForm.get('datosPersonales.edad')?.setValue(edadCalculada, { emitEvent: false });
      } else {
        // Si la fecha es inválida, limpia el campo de edad
        this.clienteForm.get('datosPersonales.edad')?.setValue('', { emitEvent: false });
      }
    });
  }

  formatDateInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
  
    // Limitar el número de caracteres a 10
    value = value.slice(0, 10).replace(/\D/g, '');
  
    // Insertar los separadores "/"
    if (value.length > 2 && value.length <= 4) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    } else if (value.length > 4) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
    }
  
    inputElement.value = value;
  
    this.clienteForm.get('datosPersonales.fechaNacimiento')?.setValue(value, { emitEvent: false });
  }
  

  validarFormatoFecha(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (value && !regex.test(value)) {
      return { formatoInvalido: true };
    }
    return null;
  }

  validarFormatoFechaCorrecto(fecha: string): boolean {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    
    // Verifica si cumple con el formato DD/MM/AAAA
    if (!regex.test(fecha)) {
      return false;
    }
  
    // Extrae el día, mes y año
    const [dia, mes, anio] = fecha.split('/').map(Number);
  
    // Verifica que el año esté entre 0000 y el año actual
    const anioActual = new Date().getFullYear();
    if (anio < 0 || anio > anioActual) {
      return false;
    }
  
    // Verifica que el día y el mes sean válidos, teniendo en cuenta los meses y años bisiestos
    const fechaValida = new Date(anio, mes - 1, dia);
    if (
      fechaValida.getDate() !== dia ||
      fechaValida.getMonth() + 1 !== mes || 
      fechaValida.getFullYear() !== anio
    ) {
      return false;
    }
  
    return true;
  }

  //EDAD
calcularEdad(fechaNacimiento: string): number {
  const [dia, mes, anio] = fechaNacimiento.split('/').map(Number);
  const nacimiento = new Date(anio, mes - 1, dia);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
  if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

  submit() {
    if (this.clienteForm.valid) {
      console.log('Datos del cliente editados:', this.clienteForm.value);
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
}
