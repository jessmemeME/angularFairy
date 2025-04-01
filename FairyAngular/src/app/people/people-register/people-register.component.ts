import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';  // Importa el servicio Router
import { Client} from '../../../models/clients.model';//llamamos a nuestra interface
import { Gender, People } from '../../../models/basic-info.model';
import { DocumentType } from '../../../models/basic-info.model';
import { PeopleService } from '../people.service';
import { first } from 'rxjs';
import { citiesResponse, Locations, LocationsResponse } from '../../../models/locations.models';
import { Contacts, ContactType } from '../../../models/contacts.models';
import { BusinessInvoiceData } from '../../../models/bussiness.models';


@Component({
  selector: 'app-people-register',
  templateUrl: './people-register.component.html',
  styleUrls: ['./people-register.component.css']
})
export class PeopleRegisterComponent implements OnInit {

  @Output() onRegisterSuccess = new EventEmitter<any>();
  @Input() desdeBusqueda: boolean = false;
  
  clienteForm!: FormGroup;
  showEspecificarOtro: boolean = false;
  locations: LocationsResponse[] = [];
  cities: citiesResponse[] = [];
  documentTypes: DocumentType[] = [];
  enableRegisterClient: boolean = false;
  genders: Gender[] = [];
  contactTypes: ContactType[] = [];
  enableRegisterRuc: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private peopleService: PeopleService) {
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
      facturacion: this.fb.array([this.crearDatoFacturacion()])

    });

    this.onChangesGender();
    this.onChangesBirthdayDate();
  }

  ngOnInit(): void {
    this.peopleService.getLocations().subscribe(
      (data) => {
        this.locations = data;
        console.log('Datos recibidos:', this.locations);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );

    this.peopleService.getDocumentTypes().subscribe(
      (data) => {
        this.documentTypes = data;
        console.log('Tipos de documentos:', this.documentTypes);
      },
      (error) => {
        console.error('Error al obtener los tipos de documentos:', error);
      }
    );
    this.peopleService.getAllGender().subscribe(
      (data) => {
        this.genders = data;
        console.log('Geners:', this.genders);
      },
      (error) => {
        console.error('Error al obtener los generos:', error);
      });
    this.peopleService.getAllContactTypes().subscribe(
      (data) => {
        this.contactTypes = data;
        console.log('Tipos de contactos:', this.contactTypes);
      },
      (error) => {
        console.error('Error al obtener los tipos de contactos:', error);
      }
    );
  }

  // Método para volver a la lista de people
  goBack(): void {
    this.router.navigate(['/clients']);  // Redirige a la página principal de people
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
    nombreContacto: ['', Validators.required],
    datoDeContacto: ['', Validators.required],
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
    this.peopleService.getPeopleByDocumentNumber(numeroDocumento, tipoDocumento).subscribe(
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
    this.peopleService.getBussinessInvoiceDataByRuc(numeroDocumento).subscribe(
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
          name: control.get('nombreContacto')!.value,
          contact_data: control.get('datoDeContacto')!.value,
          verificated_token: '',
          is_verified: true,
          is_main_contact: control.get('contactoPrincipal')!.value,
          description: 'New user',
          created_date: new Date().toISOString(),
          updated_date: new Date().toISOString(),
          is_active: true,
          table_name: '',
          contact_type_id: control.get('tipoContacto')!.value,
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
      
        this.peopleService.RegisterClientsAllForm(people, all_locations,all_contacts,all_client_invoice).subscribe(
          response => {
            console.log('People y persona creados', response);
            console.log('Response:', response);
            if (this.desdeBusqueda) {
             
              console.log('Response:', response);
              people.id = response.peopleId;
              this.onRegisterSuccess.emit(people);
            }else{
              this.router.navigate(['/clients']);
            }          
            
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
