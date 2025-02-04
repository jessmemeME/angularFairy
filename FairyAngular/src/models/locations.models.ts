export interface Locations {
    id?: number; // ID de la ubicación
    name?: string; // Nombre de la ubicación
    description?: string; // Descripción de la ubicación
    street1?: string; // Calle 1 de la ubicación
    street2?: string; // Calle 2 de la ubicación
    house_number?: string; // Número de casa de la ubicación
    floor?: string; // Piso de la ubicación
    building_name?: string; // Nombre del edificio de la ubicación
    latitude?: number; // Latitud de la ubicación
    longitude?: number; // Longitud de la ubicación
    observation?: string; // Observación de la ubicación
    photo?: string; // Foto de la ubicación
    is_main_location?: boolean; // Indica si la ubicación es principal
    city_id?: number; // ID de la ciudad de la ubicación
    departament_id?: number; // ID del departamento de la ubicación
    country_id?: number; // ID del país de la ubicación
    id_location_type_id?: number; // ID del tipo de ubicación
    is_active?: boolean; // Indica si la ubicación está activa
    created_user_id?: number; // ID del usuario que creó la ubicación
    updated_user_id?: number; // ID del usuario que actualizó la ubicación
    created_date?: string; // Fecha de creación
    updated_date?: string; // Fecha de última actualización
  }

export interface LocationsResponse {
  id?: number; // ID de la ubicación
  name?: string; // Nombre de la ubicación
  cities?: citiesResponse[]; // Ciudades de la ubicación
}

export interface citiesResponse {
  id?: number; // ID de la ciudad
  name?: string; // Nombre de la ciudad
}