// auth.models.ts - Definición de interfaces para la autenticación

// Interfaz para el modelo de login
export interface Login {
    email: string; // Email del usuario
    password: string; // Contraseña del usuario
}

// Interfaz para la respuesta del login
export interface ReturnLogin {
    mensaje: string;  // Mensaje de respuesta
    respuesta: string; // Estado de la respuesta (EXITO o ERROR)
    token?: string; // Token de autenticación
  }

// Interfaz para el modelo de código de autenticación
export interface Code {
    auth_code: string; // Código de autenticación
}

// Interfaz para el modelo de email
export interface email {
    email: string; // Email del usuario
}
