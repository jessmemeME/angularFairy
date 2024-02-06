export interface AuthGroup {
    id?: number;
  name?: string;
}

export interface AuthGRoupResult {
    result:AuthGroup[],
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

export interface AuthGroupPermissions {
  id:number;
  name:string;
  content_type_id:number;
  content_type:string;
  checqueado:boolean;
  codename:string
}

export interface AuthGroupPermissionsUpdate {
  id:number;
  listaPermisos:string;
}