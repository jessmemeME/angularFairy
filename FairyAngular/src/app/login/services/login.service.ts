import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';  // Asegúrate de importar estos operadores
import { Login, ReturnLogin } from '../../../models';
import { AuthService } from '../../core/services/auth.service'; // Importa AuthService

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:5229';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  login(data: Login): Observable<string> {
    return this.http.post<ReturnLogin>(`${this.apiUrl}/Login/Login`, data, {
      headers: this.getHeaders()
    }).pipe(
      map((response: ReturnLogin) => {
        // Verificamos si la respuesta es exitosa y contiene un token
        if (response.respuesta === 'EXITO' && response.token) {
          return response.token;  // Devolvemos el token en caso de éxito
        } else {
          throw new Error('Login fallido');  // Lanza error si no hay token
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en el login:', error);
        throw error;  // Lanza el error para que el componente lo maneje
      })
    );
  }
  


  // Encabezados comunes para las solicitudes HTTP
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });
  }
}