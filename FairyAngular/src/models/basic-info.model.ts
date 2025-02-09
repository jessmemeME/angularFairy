// models.ts - Definición de interfaces para los modelos referentes a la base de datos

// ESTA SECCIÓN ES DE TODO LO REFERENTE A CUENTAS DE USUARIOS
// Tabla accounts_user

// Interfaz para la información básica
export interface BasicInfo {}


// Interfaz para los grupos de edad
export interface AgeGroup {
  id?: number; // ID del grupo de edad
  name?: string; // Nombre del grupo de edad
  description?: string; // Descripción del grupo de edad
  age_range?: string; // Rango de edad
  is_active?: boolean; // Indica si el grupo de edad está activo
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó el grupo de edad
  updated_user_id?: number; // ID del usuario que actualizó el grupo de edad
  /*
   TABLE_NAME = 'basic_info_age_group'
   */
}

// Interfaz para los tipos de documentos
export interface DocumentType {
  id?: number; // ID del tipo de documento
  name?: string; // Nombre del tipo de documento
  description?: string; // Descripción del tipo de documento
  is_active?: boolean; // Indica si el tipo de documento está activo
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó el tipo de documento
  updated_user_id?: number; // ID del usuario que actualizó el tipo de documento
  /*
   TABLE_NAME = 'basic_info_document_type'
   */
}

// Interfaz para el género
export interface Gender {
  id?: number; // ID del género
  name?: string; // Nombre del género
  description?: string; // Descripción del género
  is_active?: boolean; // Indica si el género está activo
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó el género
  updated_user_id?: number; // ID del usuario que actualizó el género
  /*
   TABLE_NAME = 'basic_info_gender'
   */
}

// Interfaz para las relaciones comerciales
export interface RelationshipBusiness {
  id?: number; // ID de la relación comercial
  name?: string; // Nombre de la relación comercial
  description?: string; // Descripción de la relación comercial
  is_active?: boolean; // Indica si la relación comercial está activa
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó la relación comercial
  updated_user_id?: number; // ID del usuario que actualizó la relación comercial
  /*
   TABLE_NAME = 'basic_info_relationship_business'
   */
}

// Interfaz para los tipos de comensales
export interface TypeOfDiner {
  id?: number; // ID del tipo de comensal
  name?: string; // Nombre del tipo de comensal
  description?: string; // Descripción del tipo de comensal
  is_active?: boolean; // Indica si el tipo de comensal está activo
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó el tipo de comensal
  updated_user_id?: number; // ID del usuario que actualizó el tipo de comensal
  /*
   TABLE_NAME = 'basic_info_type_of_diner'
   */
}

// Interfaz para las tradiciones
export interface Tradition {
  id?: number; // ID de la tradición
  name?: string; // Nombre de la tradición
  description?: string; // Descripción de la tradición
  requisitos?: string; // Requisitos de la tradición
  reglas?: string; // Reglas de la tradición
  is_active?: boolean; // Indica si la tradición está activa
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó la tradición
  updated_user_id?: number; // ID del usuario que actualizó la tradición
  /*
   TABLE_NAME = 'basic_info_tradition'
   */
}

// Interfaz para las culturas
export interface Culture {
  id?: number; // ID de la cultura
  name?: string; // Nombre de la cultura
  description?: string; // Descripción de la cultura
  is_active?: boolean; // Indica si la cultura está activa
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó la cultura
  updated_user_id?: number; // ID del usuario que actualizó la cultura
  /*
   TABLE_NAME = 'basic_info_culture'
   */
}

// Interfaz para las religiones
export interface Religion {
  id?: number; // ID de la religión
  name?: string; // Nombre de la religión
  description?: string; // Descripción de la religión
  is_active?: boolean; // Indica si la religión está activa
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  created_user_id?: number; // ID del usuario que creó la religión
  updated_user_id?: number; // ID del usuario que actualizó la religión
  /*
   TABLE_NAME = 'basic_info_religion'
   */
}

export interface People {
  id?: number; // ID de la persona
  first_name?: string; // Primer nombre de la persona
  last_name?: string; // Apellido de la persona
  document_number?: string; // Número de documento de la persona
  photo_people?: string; // Foto de la persona
  date_of_birth?: string; // Fecha de nacimiento de la persona
  date_of_death?: string; // Fecha de defunción de la persona
  description?: string; // Descripción de la persona
  created_date?: string; // Fecha de creación
  updated_date?: string; // Fecha de última actualización
  is_active?: boolean; // Indica si la persona está activa
  age_group_id?: number; // ID del grupo de edad de la persona
  document_type_id?: number; // ID del tipo de documento
  gender_id ?: number; // ID del género de la persona
  type_of_diner_id?: number; // ID del tipo de comensal
  created_user_id?: number; // ID del usuario que creó la persona
  updated_user_id?: number; // ID del usuario que actualizo
}
