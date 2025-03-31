import { Component, OnInit,Inject  } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { PeopleService } from '../people.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DocumentType } from '../../../models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-people-modal',
  templateUrl: './people-modal.component.html',
  styleUrl: './people-modal.component.css'
})
export class PeopleModalComponent implements OnInit {
  datosBusqueda!: FormGroup;
  personaEncontrada: any = null;
  tipoDocumento: number | null = null;
  numeroDocumento:  string = '';
  buscado: boolean = false;
  clienteForm!: FormGroup;
  documentTypes: DocumentType[] = [];

  @Output() onPersonaSeleccionada = new EventEmitter<any>();

  constructor(private peopleService: PeopleService, 
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<PeopleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
    this.datosBusqueda = this.fb.group({
      tipoDocumento: ['Cedula'],
      numeroDocumento: ['']
    });
  }

  ngOnInit(): void {
    this.peopleService.getDocumentTypes().subscribe(
      (data) => {
        this.documentTypes = data;
        console.log('Tipos de documentos: puireba si carga', this.documentTypes);
      },
      (error) => {
        console.error('Error al obtener los tipos de documentos:', error);
      }
    );
  }
 
  // verificarDocumento(): void {
  //   const numeroDocumento = this.datosBasicosControl.get('numeroDocumento')!.value;
  //   const tipoDocumento = this.datosBasicosControl.get('tipoDocumento')!.value;
  //   console.log('Verificar documento:', numeroDocumento, tipoDocumento);
  //   this.peopleService.getPeopleByDocumentNumber(numeroDocumento, tipoDocumento).subscribe(
  //     (response) => {
  //       console.log('Documento verificado:', response);
  //       if (response.length == 0) {
  //         this.enableRegisterClient = true;
  //       }
  //     },
  //     (error) => {
  //       console.error('Error al verificar el documento:', error);
  //     });
  // }


  buscarPersona() {
    const numeroDocumento = this.datosBusqueda!.get('numeroDocumento')!.value;
    const tipoDocumento =this.datosBusqueda!.get('tipoDocumento')!.value;
    if (tipoDocumento !== null) {
      this.peopleService.getPeopleByDocumentNumber(numeroDocumento, tipoDocumento).subscribe({
      next: (persona) => {
        this.personaEncontrada = persona;
        this.buscado = true;
      },
      error: () => {
        this.personaEncontrada = null;
        this.buscado = true;
      }});
    }
  }

  cerrar() {
    this.dialogRef.close();
  }

  seleccionarPersona(persona: any) {
    this.dialogRef.close(persona);
  }
}
