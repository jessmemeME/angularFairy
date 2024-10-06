import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login, ReturnLogin } from '../../../models'; // Asegúrate de que estos modelos existan
import { DOCUMENT } from '@angular/common';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5229';
  private userIsAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.userIsAuthenticated.asObservable();

  // Duración de la sesión en milisegundos (ejemplo: 1 hora = 3600000 ms)
  private sessionDuration = 3600000;

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.checkAuthentication();
  }

  // Verifica si el usuario ya está autenticado y si la sesión ha expirado
  private checkAuthentication(): void {
    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      const expiration = localStorage.getItem('sessionExpiration');
      const now = new Date().getTime();

      // Si la sesión ha expirado, actualiza el estado de autenticación
      if (expiration && now > +expiration) {
        this.updateAuthenticationState(false);
      } else {
        const isAuthenticated = localStorage.getItem('userIsLoged') === 'true';
        this.userIsAuthenticated.next(isAuthenticated);
      }
    }
  }

  // Devuelve un Observable y actualiza el estado de autenticación
  login(data: Login): Observable<boolean> {
    return this.http.post<ReturnLogin>(`${this.apiUrl}/Login/Login`, data, {
      headers: this.getHeaders()
    }).pipe(
      map((response: ReturnLogin) => this.handleLoginResponse(response)),
      catchError((error: HttpErrorResponse) => this.handleLoginError(error))
    );
  }

  // Maneja la respuesta de login
  private handleLoginResponse(response: ReturnLogin): boolean {
    const isSuccess = response.respuesta === 'EXITO';
    this.updateAuthenticationState(isSuccess);
    return isSuccess;
  }

  // Maneja errores durante el login
  private handleLoginError(error: HttpErrorResponse): Observable<boolean> {
    console.error('Error en el login:', error);
    this.updateAuthenticationState(false);
    return of(false); // Retorna 'false' si hubo un error
  }

  // Actualiza el estado de autenticación y almacena en localStorage con tiempo de expiración
  private updateAuthenticationState(isAuthenticated: boolean): void {
    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      if (isAuthenticated) {
        const expirationTime = new Date().getTime() + this.sessionDuration;
        localStorage.setItem('userIsLoged', 'true');
        localStorage.setItem('sessionExpiration', expirationTime.toString());
      } else {
        localStorage.removeItem('userIsLoged');
        localStorage.removeItem('sessionExpiration');
      }
    }
    this.userIsAuthenticated.next(isAuthenticated);
  }

  // Proporciona los encabezados HTTP necesarios
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });
  }

  // Cierra sesión y limpia el estado de autenticación
  logout(): void {
    this.updateAuthenticationState(false);
  }
}
