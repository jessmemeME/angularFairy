import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeopleService } from '../people.service';
import { DocumentType, People } from '../../../models';
import { co } from '@fullcalendar/core/internal-common';


@Component({
  selector: 'app-people-search-and-select',
  templateUrl: './people-search-and-select.component.html',
  styleUrl: './people-search-and-select.component.css'
})
export class PeopleSearchAndSelectComponent implements OnInit{
   datosBusqueda!: FormGroup;
    personaEncontrada: People | null = null;
    tipoDocumento: number | null = null;
    numeroDocumento:  string = '';
    buscado: boolean = false;
    clienteForm!: FormGroup;
    documentTypes: DocumentType[] = [];
  
    @Output() onPersonaSeleccionada = new EventEmitter<any>();

    constructor(private peopleService: PeopleService, 
        private fb: FormBuilder) {
        
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

      buscarPersona() {
        console.log(JSON.stringify(this.datosBusqueda.value));
        console.log(this.datosBusqueda.value.tipoDocumento);
        const numeroDocumento = this.datosBusqueda!.get('numeroDocumento')!.value;
        const tipoDocumento =this.datosBusqueda.value.tipoDocumento;
        if (tipoDocumento !== null) {
          this.peopleService.getPeopleByDocumentNumber(numeroDocumento, tipoDocumento).subscribe({
          next: (persona) => {
            this.personaEncontrada = persona[0];
            this.buscado = true;
          },
          error: () => {
            this.personaEncontrada = null;
            this.buscado = true;
          }});
        }
      }

      seleccionarPersona(persona: any) {
        console.log('Persona seleccionada:', persona);
        this.onPersonaSeleccionada.emit(persona);
      }
}
