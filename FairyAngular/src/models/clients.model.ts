// clients.models.ts - Definición de interfaces para el modelo de clientes

import { ex } from "@fullcalendar/core/internal-common";
import { People,DocumentType } from "./basic-info.model";

// Interfaz para la tabla clients_client
export interface Client {
	id?: number; // ID del cliente
	type?: string; // Tipo de cliente
	name?: string; // Nombre del cliente
	description?: string; // Descripción del cliente
	is_confirmated?: boolean; // Indica si el cliente está confirmado
	created_date?: string; // Fecha de creación
	updated_date?: string; // Fecha de última actualización
	is_active?: boolean; // Indica si el cliente está activo
	created_user_id?: number; // ID del usuario que creó el cliente
	people_id?: number; // ID de la persona asociada al cliente
	updated_user_id?: number; // ID del usuario que actualizó el cliente
	type_people?: string; // Tipo de persona (natural o jurídica)
	/*
	 TABLE_NAME = 'clients_client'
	 */
  }
  

  export interface ClientsAndPeople {
    client: Client;
    people: People;
    documentType: DocumentType;
  }
/*nombres: 'Jessica Dahiana', apellidos: 'Rodriguez Prieto', tipoDocumento: 'Cédula', numeroDocumento: '4893744', estado: 'Cliente Activo'*/

export interface clientPageResum {
    id: number;
    first_name: string;
    last_name: string;
    document_number: string;
    document_type: string;
    status: string;
}
  