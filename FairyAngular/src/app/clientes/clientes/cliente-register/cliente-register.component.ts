import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';  // Importa el servicio Router
import { Client} from '../../../../models/clients.model';//llamamos a nuestra interface
import { Gender, People } from '../../../../models/basic-info.model';
import { DocumentType } from '../../../../models/basic-info.model';
import { ClientesService } from '../../clientes.service';
import { first } from 'rxjs';
import { citiesResponse, Locations, LocationsResponse } from '../../../../models/locations.models';
import { Contacts } from '../../../../models/contacts.models';
import { BusinessInvoiceData } from '../../../../models/bussiness.models';
import { PeopleService } from '../../../people/people.service';
import { PeopleModule } from '../../../people/people.module';
import { PeopleRegisterComponent } from '../../../people/people-register/people-register.component';
import { PeopleModalComponent } from '../../../people/people-modal/people-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'dd/MM/yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'dd/MM/yyyy',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'app-cliente-register',
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class ClienteRegisterComponent implements OnInit {
  clienteForm!: FormGroup;
  showEspecificarOtro: boolean = false;
  
  documentTypes: DocumentType[] = [];
  enableRegisterClient: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private clientesService: ClientesService,private dialog: MatDialog) {
    this.clienteForm = this.fb.group({
      datosBasicos: this.fb.group({
        persona: ['', Validators.required],
        personaLabel: [''],
        estado: ['Prospecto', Validators.required],  // Valor por defecto "Prospecto"
        tipoCliente: ['F', Validators.required],  // Valor por defecto "Cliente"
        fechaIncorporacion: [new Date().toISOString(), Validators.required],  // Valor por defecto fecha actual
        fechaIncorporacion2: [(new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()), Validators.required],  // Valor por defecto fecha actual
        descripcion: ['',Validators.required],
        relacion: ['',Validators.required],
      })
    });
  }

  ngOnInit(): void {
   

    this.clientesService.getDocumentTypes().subscribe(
      (data) => {
        this.documentTypes = data;
        console.log('Tipos de documentos:', this.documentTypes);
      },
      (error) => {
        console.error('Error al obtener los tipos de documentos:', error);
      }
    );
  }

  // Método para volver a la lista de clientes
  goBack(): void {
    this.router.navigate(['/clients']);  // Redirige a la página principal de clientes
  }

  get datosBasicosControl(): FormGroup {
    return this.clienteForm.get('datosBasicos') as FormGroup;
  }

  get datosPersonalesControl(): FormGroup {
    return this.clienteForm.get('datosPersonales') as FormGroup;
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

  saveProgress(): void {
    
    console.log('Datos guardados:', this.datosBasicosControl.valid);
    if (this.datosBasicosControl.valid) {
      console.log('que es esto');
     

      let client: Client = { type: this.datosBasicosControl.get('estado')!.value, 
        name:this.datosBasicosControl.get('persona')!.value.first_name + '_' + this.datosBasicosControl.get('persona')!.value.last_name,
        description: this.datosBasicosControl.get('descripcion')!.value,
        type_people: this.datosBasicosControl.get('tipoCliente')!.value,
        is_confirmated: true, created_date: new Date().toISOString(), 
        updated_date: new Date().toISOString(), is_active: true, created_user_id: 1, people_id: this.datosBasicosControl.get('persona')!.value.id, updated_user_id: 1};

      let all_locations : any[] = [];
      let location: Locations;
      console.log('client', client);
      //RegisterClients
        this.clientesService.RegisterClients(client).subscribe(
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


  asignarPersona(persona: any) {
    console.log('Persona seleccionada:', persona);
    // Aquí podés seguir con el flujo: crear cliente, proveedor, invitado, etc.
  }

  abrirPeopleModal() {
    const dialogRef = this.dialog.open(PeopleModalComponent, {
      width: '90vw',
      height: '90vh',
      panelClass: 'full-screen-modal',
      data: {} // opcional
    });

    dialogRef.afterClosed().subscribe((personaSeleccionada) => {
      if (personaSeleccionada) {
        this.datosBasicosControl.patchValue({
          persona: personaSeleccionada,
          personaLabel: personaSeleccionada.document_number+ ' - '+ personaSeleccionada.first_name + ' ' + personaSeleccionada.last_name
        });
        console.log('Persona seleccionada:', personaSeleccionada);
        // this.miFormulario.patchValue({
        //   people_id: personaSeleccionada.id
        // });
      }
    });
  }

}
