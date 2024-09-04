// auth-group.models.ts - Definición de interfaces para los grupos de autenticación y sus permisos

// Interfaz para un grupo de autenticación
export interface AuthGroup {
  id?: number; // ID del grupo de autenticación
  name?: string; // Nombre del grupo de autenticación
}

// Interfaz para el resultado de una operación con grupos de autenticación
export interface AuthGroupResult {
  result: AuthGroup[]; // Lista de grupos de autenticación
  id: number; // ID de la operación
  exception: string; // Excepción si ocurrió un error
  status: number; // Estado de la operación
  isCanceled: boolean; // Indica si la operación fue cancelada
  isCompleted: boolean; // Indica si la operación se completó
  isCompletedSuccessfully: boolean; // Indica si la operación se completó con éxito
  creationOptions: number; // Opciones de creación
  asyncState: string; // Estado asincrónico
  isFaulted: boolean; // Indica si la operación falló
}

// Interfaz para los permisos de un grupo de autenticación
export interface AuthGroupPermissions {
  id: number; // ID del permiso
  name: string; // Nombre del permiso
  content_type_id: number; // ID del tipo de contenido
  content_type: string; // Tipo de contenido
  checqueado: boolean; // Indica si el permiso está seleccionado
  codename: string; // Nombre en código del permiso
}

// Interfaz para la actualización de permisos de un grupo de autenticación
export interface AuthGroupPermissionsUpdate {
  id: number; // ID del grupo de autenticación
  listaPermisos: string; // Cadena con la lista de permisos actualizados
}
