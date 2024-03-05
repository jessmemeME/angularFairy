import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import {AuthGroup, AuthGroupPermissions, AuthGroupPermissionsUpdate} from "../../models/auth-group.model"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5229';

  constructor(private http: HttpClient) { }

  getDataWithHeader(): Observable<AuthGroup[]> {
    // Definir el encabezado que deseas agregar
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

      // Agrega otros encabezados según sea necesario
    });

    // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
    return this.http.get<AuthGroup[]>(`${this.apiUrl}/Auth/ListAllAuthGroups`, { headers: headers }).pipe(tap((data) => {}))
    ;
  }

  postData(data:AuthGroup ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

  

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Auth/RegisterAuthGroup`, data, { headers: headers}).pipe(tap((data => {})));
  }

  updateData(data:AuthGroup ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Auth/UpdateAuthGroup`, data, { headers: headers}).pipe(tap((data => {})));
  }


  deleteData(data:AuthGroup ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Auth/DeleteAuthGroup`, data, { headers: headers}).pipe(tap((data => {})));
  }

  getAuthPermisionss(id:number): Observable<AuthGroupPermissions[]> {
    // Definir el encabezado que deseas agregar
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

      // Agrega otros encabezados según sea necesario
    });
     // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
     return this.http.get<AuthGroupPermissions[]>(`${this.apiUrl}/Auth/ListAllAuthGroupPermissionss/`+id, { headers: headers }).pipe(tap((data) => {}))
     ;
    }


    updateAuthPermisions(data:AuthGroupPermissionsUpdate ): Observable<any> {
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      });
  
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/Auth/UpdateAuthGroupPermissions`, data, { headers: headers}).pipe(tap((data => {})));
    }

  
}
