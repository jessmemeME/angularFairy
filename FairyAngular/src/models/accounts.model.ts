//Aqui definimos los campos del modelo (referentes a la base de datos)

//ESTA SECCION ES DE TODO LO REFERENTE A CUENTAS DE USUARIOS
//tabla accounts_user
export interface Accounts {
    id?:number;
    password?:string;
    last_login?:string;
    is_superuser?:boolean;
    email?:string;
    is_staff?:boolean;
    is_active?:boolean;
    date_joined?:string;
    last_updated?:string;
}

export interface AccountsResult {
    result:Accounts[],
    id:number;
    exception:string;
    status:number;
    isCanceled:boolean;
    isCompleted:boolean;
    isCompletedSuccessfully:boolean;
    creationOptions:number;
    asyncState:string;
    isFaulted:boolean;
}

export interface UserPermissionsWithCheck {
    id?:number;
    permission_name?:string;
    chequeado: boolean;
}

export interface UserGroupPermissionsUpdate {
    id:number;
    listaPermisos:string;
}