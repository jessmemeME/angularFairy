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


@Component({
  selector: 'app-cliente-register',
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.css']
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
      
      
        // this.clientesService.RegisterClientsAllForm(client, people, all_locations,all_contacts,all_client_invoice).subscribe(
        //   response => {
        //     console.log('Cliente y persona creados', response);
        //     this.router.navigate(['/clients']);
        //   },
        //   error => {
        //     console.error('Error al crear el cliente y persona', error);
        //   }
        // );

      
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
