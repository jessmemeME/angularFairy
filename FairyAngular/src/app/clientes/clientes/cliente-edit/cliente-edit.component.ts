import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router, ActivatedRoute } from '@angular/router';  // Importa el servicio Router
import { Client} from '../../../../models/clients.model';//llamamos a nuestra interface
import { Gender, People } from '../../../../models/basic-info.model';
import { DocumentType } from '../../../../models/basic-info.model';
import { ClientesService } from '../../clientes.service';
import { first } from 'rxjs';
import { citiesResponse, Locations, LocationsResponse } from '../../../../models/locations.models';
import { Contacts } from '../../../../models/contacts.models';
import { BusinessInvoiceData } from '../../../../models/bussiness.models';


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

  locations: LocationsResponse[] = [];
  cities: citiesResponse[] = [];
  documentTypes: DocumentType[] = [];
  enableRegisterClient: boolean = false;
  genders: Gender[] = [];
  enableRegisterRuc: boolean = false;

  constructor(private fb: FormBuilder, private router: Router,private route: ActivatedRoute, private clientesService: ClientesService) {
    this.clienteForm = this.fb.group({
      datosBasicos: this.fb.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        tipoDocumento: ['Cedula', Validators.required],
        numeroDocumento: ['', Validators.required],
        estado: ['Prospecto', Validators.required]  // Valor por defecto "Prospecto"
      }),
      datosPersonales: this.fb.group({
        genero: ['', Validators.required],
        especificarOtro: [''],
        fechaNacimiento: ['', [Validators.required, this.validarFormatoFecha]], // Validador de formato personalizado
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
    this.clientesService.getLocations().subscribe(
      (data) => {
        this.locations = data;
        console.log('Datos recibidos:', this.locations);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );

    this.clientesService.getDocumentTypes().subscribe(
      (data) => {
        this.documentTypes = data;
        console.log('Tipos de documentos:', this.documentTypes);
      },
      (error) => {
        console.error('Error al obtener los tipos de documentos:', error);
      }
    );
    this.clientesService.getAllGender().subscribe(
      (data) => {
        this.genders = data;
        console.log('Geners:', this.genders);
      },
      (error) => {
        console.error('Error al obtener los generos:', error);
      });

    const clientId = Number(this.route.snapshot.paramMap.get('clientId'));
    if (clientId) {
      this.loadClientData(clientId);
    }
  }

  // Método para volver a la lista de clientes
  goBack(): void {
    this.router.navigate(['/clients']);  // Redirige a la página principal de clientes
  }


  // Método para cargar los datos del cliente y completar el formulario
  private loadClientData(clientId: number): void {
    this.clientesService.getClientDetails(clientId).subscribe(
      
      (data: any) => {
        console.log('Datos del cliente:', data);
        console.log('Datos del BasicInfoPeople:', data.BasicInfoPeople);
        // Se espera que 'data' contenga: ClientsClient, BasicInfoPeople, Locations, Contacts y BusinessInvoiceData
        // Completar sección de Datos Básicos
        this.clienteForm.patchValue({
          datosBasicos: {
            nombres: data.basicInfoPeople.first_name,
            apellidos: data.basicInfoPeople.last_name,
            numeroDocumento: data.basicInfoPeople.document_number,
            tipoDocumento: data.basicInfoPeople.document_type_id,  // Ajusta según corresponda
            estado: data.clientsClient.type
          },
          datosPersonales: {
            genero: data.basicInfoPeople.gender_id,
            // Suponiendo que si existe date_of_birth se formatea a DD/MM/YYYY
            fechaNacimiento: data.basicInfoPeople.date_of_birth ? this.formatearFecha(data.basicInfoPeople.date_of_birth) : ''
          }
        });

        // Limpiar y reconstruir el FormArray de Ubicaciones
        const ubicacionesFA = this.clienteForm.get('ubicaciones') as FormArray;
        ubicacionesFA.clear();
        data.locations.forEach((loc: any) => {
          ubicacionesFA.push(this.fb.group({
            nombreUbicacion: [loc.name, Validators.required],
            ubicacionPrincipal: [loc.is_main_location],
            callePrincipal: [loc.street1, Validators.required],
            calleSecundaria: [loc.street2, Validators.required],
            numeroCasa: [loc.house_number, Validators.required],
            departamento: [loc.departament_id, Validators.required],
            ciudad: [loc.city_id, Validators.required],
            barrio: [''],  // Completa si el endpoint lo incluye
            ubicacionMaps: [''],
            observacion: [loc.observation],
            estadoUbicacion: [loc.is_active ? 'Activo' : 'Inactivo', Validators.required]
          }));
        });

        // Procesar los contactos: separamos contactos normales y redes sociales según contact_type_id
        const contactosFA = this.clienteForm.get('contactos') as FormArray;
        const redesSocialesFA = this.clienteForm.get('redesSociales') as FormArray;
        contactosFA.clear();
        redesSocialesFA.clear();
        data.contacts.forEach((contact: any) => {
          if (contact.contact_type_id === 1) {
            contactosFA.push(this.fb.group({
              tipoContacto: [contact.name, Validators.required],
              contacto: [contact.contact_data, Validators.required],
              contactoPrincipal: [contact.is_main_contact],
              estadoContacto: [contact.is_active ? 'Activo' : 'Inactivo', Validators.required]
            }));
          } else if (contact.contact_type_id === 2) {
            redesSocialesFA.push(this.fb.group({
              tipoRedSocial: [contact.name, Validators.required],
              usuario: [contact.contact_data, Validators.required],
              enlace: [''],  // Ajusta si en el endpoint existe información adicional
              estadoRedSocial: [contact.is_active ? 'Activo' : 'Inactivo', Validators.required]
            }));
          }
        });

        // Procesar datos de facturación
        const facturacionFA = this.clienteForm.get('facturacion') as FormArray;
        facturacionFA.clear();
        data.businessInvoiceData.forEach((invoice: any) => {
          facturacionFA.push(this.fb.group({
            ruc: [invoice.document_number, Validators.required],
            razonSocial: [invoice.name, Validators.required],
            facturacionPrincipal: [true],  // O asigna según la lógica de negocio
            estadoFacturacion: [invoice.is_active ? 'Activo' : 'Inactivo', Validators.required]
          }));
        });
      },
      (error) => console.error('Error al cargar los datos del cliente:', error)
    );
  }

  // Método auxiliar para formatear la fecha (de ISO a DD/MM/YYYY)
  private formatearFecha(fechaISO: string): string {
    const date = new Date(fechaISO);
    const dia = ('0' + date.getDate()).slice(-2);
    const mes = ('0' + (date.getMonth() + 1)).slice(-2);
    const anio = date.getFullYear();
    return `${dia}/${mes}/${anio}`;
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
//---------------------------------------------------------

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


  onDepartamentoChange(departamento: number) {
    console.log('Departamento seleccionado:', departamento);
    console.log('Departamento this.locations:', this.locations);
    this.cities = this.locations.find((location) => location.id == departamento)?.cities || [];
    console.log('Ciudades del departamento:', this.cities);
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


//---------------------------------------------------------
  submitTEst() {
    console.log('Datos del cliente:', this.clienteForm.value);
    
    if (this.clienteForm.valid) {
      
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

  verificarDocumento(): void {
    const numeroDocumento = this.datosBasicosControl.get('numeroDocumento')!.value;
    const tipoDocumento = this.datosBasicosControl.get('tipoDocumento')!.value;
    console.log('Verificar documento:', numeroDocumento, tipoDocumento);
    this.clientesService.getPeopleByDocumentNumber(numeroDocumento, tipoDocumento).subscribe(
      (response) => {
        console.log('Documento verificado:', response);
        if (response.length == 0) {
          this.enableRegisterClient = true;
        }
      },
      (error) => {
        console.error('Error al verificar el documento:', error);
      });
  }

  verificarRuc(): void {
    const numeroDocumento = this.facturacion.controls[0].get('ruc')!.value;
    console.log('Verificar documento:', numeroDocumento);
    this.clientesService.getBussinessInvoiceDataByRuc(numeroDocumento).subscribe(
      (response) => {
        console.log('Documento verificado:', response);
        if (response.length == 0) {
          this.enableRegisterRuc = true;
        }
      },
      (error) => {
        console.error('Error al verificar el documento:', error);
      });
  }

  saveProgress(): void {
    
    console.log('Datos guardados:', this.datosBasicosControl.valid);
    if (this.datosBasicosControl.valid) {
      console.log('que es esto');
      let people: People = { first_name: this.datosBasicosControl.get('nombres')!.value, 
        last_name: this.datosBasicosControl.get('apellidos')!.value, 
        document_number: this.datosBasicosControl.get('numeroDocumento')!.value,
        document_type_id: this.datosBasicosControl.get('tipoDocumento')!.value,
        photo_people: 'No', 
        date_of_birth: new Date().toISOString(), description: 'New user', is_active: true, created_date: new Date().toISOString(), 
        updated_date: new Date().toISOString(), age_group_id: 1,gender_id:0, type_of_diner_id:1, created_user_id: 1, updated_user_id: 1};

      let client: Client = { type: this.datosBasicosControl.get('estado')!.value, 
        name:this.datosBasicosControl.get('nombres')!.value + '_' + this.datosBasicosControl.get('apellidos')!.value,
        description: 'New user', is_confirmated: true, created_date: new Date().toISOString(), 
        updated_date: new Date().toISOString(), is_active: true, created_user_id: 1, people_id: 1, updated_user_id: 1};

      let all_locations : any[] = [];
      let location: Locations;
      this.ubicaciones.controls.forEach((control, i) => {
        location = {
          name: control.get('nombreUbicacion')!.value,
          description: 'New user',
          street1: control.get('callePrincipal')!.value,
          street2: control.get('calleSecundaria')!.value,
          house_number: control.get('numeroCasa')!.value,
          floor: '',
          building_name: '',
          latitude: 0,
          longitude: 0,
          observation: control.get('observacion')!.value,
          photo: '',
          is_main_location: control.get('ubicacionPrincipal')!.value,
          city_id: 1,
          departament_id: 1,
          country_id: 1,
          id_location_type_id: 1,
          is_active: true,
          created_user_id: 1,
          updated_user_id: 1,
          created_date: new Date().toISOString(),
          updated_date: new Date().toISOString()
        };
        all_locations.push(location);
      });

      let all_contacts : any[] = [];
      let contact: Contacts;
      this.contactos.controls.forEach((control, i) => {
        contact = {
          name: control.get('tipoContacto')!.value,
          contact_data: control.get('contacto')!.value,
          verificated_token: '',
          is_verified: true,
          is_main_contact: control.get('contactoPrincipal')!.value,
          description: 'New user',
          created_date: new Date().toISOString(),
          updated_date: new Date().toISOString(),
          is_active: true,
          table_name: '',
          contact_type_id: 1,
          created_user_id: 1,
          updated_user_id: 1
        };
        all_contacts.push(contact);
      });
      this.redesSociales.controls.forEach((control, i) => {
        contact = {
          name: control.get('tipoRedSocial')!.value,
          contact_data: control.get('usuario')!.value,
          verificated_token: '',
          is_verified: true,
          is_main_contact: false,
          description: control.get('enlace')!.value,
          created_date: new Date().toISOString(),
          updated_date: new Date().toISOString(),
          is_active: true,
          table_name: '',
          contact_type_id: 2,
          created_user_id: 1,
          updated_user_id: 1
        };  
        all_contacts.push(contact);
      });
      
      
      let all_client_invoice : any[] = [];
      let client_invoice: BusinessInvoiceData;
      this.facturacion.controls.forEach((control, i) => {
      
        client_invoice = {
          name: control.get('razonSocial')!.value,
          document_number: control.get('ruc')!.value,
          description: 'New user',
          created_date: new Date().toISOString(),
          updated_date: new Date().toISOString(),
          is_active: true,
          created_user_id: 1,
          updated_user_id: 1,
          table_name: ''
        };
        all_client_invoice.push(client_invoice);
      });
      
        this.clientesService.RegisterClientsAllForm(client, people, all_locations,all_contacts,all_client_invoice).subscribe(
          response => {
            console.log('Cliente y persona creados', response);
            this.router.navigate(['/clients']);
          },
          error => {
            console.error('Error al crear el cliente y persona', error);
          }
        );

      
    }else{
      console.log('Datos del cliente:', this.clienteForm.value);
    }

    
  }

}