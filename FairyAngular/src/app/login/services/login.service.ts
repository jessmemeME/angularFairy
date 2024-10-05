import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, ReturnLogin } from '../../../models'; // Asegúrate de que estos modelos existan
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5229';
  private userIsAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.userIsAuthenticated.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.checkAuthentication();
  }

  // Verifica si el usuario ya está autenticado en el localStorage
  private checkAuthentication(): void {
    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      const isAuthenticated = localStorage.getItem('userIsLoged') === 'true';
      this.userIsAuthenticated.next(isAuthenticated);
    }
  }

  // Devuelve un Observable en lugar de suscribirse aquí
  login(data: Login): Observable<ReturnLogin> {
    return this.http.post<ReturnLogin>(`${this.apiUrl}/Login/Login`, data, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      })
    });
  }

  // Actualiza el estado de autenticación y limpia el localStorage
  logout(): void {
    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      localStorage.removeItem('userIsLoged');
      this.userIsAuthenticated.next(false);
    }
  }
}
