// models.ts - Definición de interfaces para los modelos referentes a la base de datos

// ESTA SECCIÓN ES DE TODO LO REFERENTE A CUENTAS DE USUARIOS

// Interfaz para la tabla accounts_user
export interface Accounts {
    id?: number; // ID del usuario
    password?: string; // Contraseña del usuario
    last_login?: string; // Último inicio de sesión del usuario
    is_superuser?: boolean; // Indica si el usuario es superusuario
    email?: string; // Email del usuario
    is_staff?: boolean; // Indica si el usuario es parte del staff
    is_active?: boolean; // Indica si la cuenta del usuario está activa
    date_joined?: string; // Fecha en que el usuario se unió
    last_updated?: string; // Última fecha de actualización de la cuenta
}

// Interfaz para el resultado de una operación con cuentas de usuario
export interface AccountsResult {
    result: Accounts[]; // Lista de cuentas de usuario
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

// Interfaz para permisos de usuario con un indicador de selección
export interface UserPermissionsWithCheck {
    id?: number; // ID del permiso
    permission_name?: string; // Nombre del permiso
    chequeado: boolean; // Indica si el permiso está seleccionado
}

// Interfaz para la actualización de permisos de grupo de usuario
export interface UserGroupPermissionsUpdate {
    id: number; // ID del grupo de usuario
    listaPermisos: string; // Cadena con la lista de permisos actualizados
}
