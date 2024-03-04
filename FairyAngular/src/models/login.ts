export interface Login {
    email:string;
    password:string;
}

export interface ReturnLogin {
    mensaje:string;
    respuesta:string;
}

export interface Code {
    auth_code:string;
}
