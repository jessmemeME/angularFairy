// clients.models.ts - Definición de interfaces para el modelo de clientes

// Interfaz para la tabla clients_client
export interface Clients {
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
	/*
	 TABLE_NAME = 'clients_client'
	 */
  }
  
  /*
  Estructura de la tabla 'clients_client':
  "id"                    "bigint"                // ID del cliente
  "type"                  "character varying"     // Tipo de cliente
  "name"                  "character varying"     // Nombre del cliente
  "description"           "text"                  // Descripción del cliente
  "is_confirmated"        "boolean"               // Indica si el cliente está confirmado
  "created_date"          "timestamp with time zone" // Fecha de creación
  "updated_date"          "timestamp with time zone" // Fecha de última actualización
  "is_active"             "boolean"               // Indica si el cliente está activo
  "created_user_id"       "bigint"                // ID del usuario que creó el cliente
  "people_id"             "bigint"                // ID de la persona asociada al cliente
  "updated_user_id"       "bigint"                // ID del usuario que actualizó el cliente
  */
  