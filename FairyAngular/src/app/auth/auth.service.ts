// auth.service.ts - Servicio de autenticación y autorización de la aplicación Angular

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthGroup, AuthGroupPermissions, AuthGroupPermissionsUpdate } from '../../models/auth-group.model';

@Injectable({
  providedIn: 'root' // Proporciona el servicio en la raíz del inyector
})
export class AuthService {
  private apiUrl = 'http://localhost:5229'; // URL base de la API

  constructor(private http: HttpClient) { }

  // Método para obtener datos con un encabezado personalizado
  getDataWithHeader(): Observable<AuthGroup[]> {
    // Definir los encabezados para la solicitud
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      // Agrega otros encabezados según sea necesario
    });

    // Realizar la solicitud GET con los encabezados definidos
    return this.http.get<AuthGroup[]>(`${this.apiUrl}/Auth/ListAllAuthGroups`, { headers: headers })
      .pipe(tap((data) => {
        // Operador tap para realizar efectos secundarios
      }));
  }

  // Método para enviar datos mediante una solicitud POST
  postData(data: AuthGroup): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Auth/RegisterAuthGroup`, data, { headers: headers })
      .pipe(tap((data => {
        // Operador tap para realizar efectos secundarios
      })));
  }

  // Método para actualizar datos mediante una solicitud POST
  updateData(data: AuthGroup): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body = JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Auth/UpdateAuthGroup`, data, { headers: headers })
      .pipe(tap((data => {
        // Operador tap para realizar efectos secundarios
      })));
  }

  // Método para eliminar datos mediante una solicitud POST
  deleteData(data: AuthGroup): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body = JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Auth/DeleteAuthGroup`, data, { headers: headers })
      .pipe(tap((data => {
        // Operador tap para realizar efectos secundarios
      })));
  }

  // Método para obtener permisos de autenticación mediante una solicitud GET
  getAuthPermissions(id: number): Observable<AuthGroupPermissions[]> {
    // Definir los encabezados para la solicitud
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      // Agrega otros encabezados según sea necesario
    });

    // Realizar la solicitud GET con los encabezados definidos
    return this.http.get<AuthGroupPermissions[]>(`${this.apiUrl}/Auth/ListAllAuthGroupPermissions/` + id, { headers: headers })
      .pipe(tap((data) => {
        // Operador tap para realizar efectos secundarios
      }));
  }

  // Método para actualizar permisos de autenticación mediante una solicitud POST
  updateAuthPermissions(data: AuthGroupPermissionsUpdate): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body = JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Auth/UpdateAuthGroupPermissions`, data, { headers: headers })
      .pipe(tap((data => {
        // Operador tap para realizar efectos secundarios
      })));
  }
}
