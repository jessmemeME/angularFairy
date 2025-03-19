import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Providers } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private apiUrl = 'http://localhost:5229/api/Provider/ListAllProviders'; // ✅ URL corregida

  constructor(private http: HttpClient) { }

  getProviders(): Observable<Providers[]> {
    return this.http.get<Providers[]>(this.apiUrl)
      .pipe(
        tap((data) => console.log('✅ Proveedores obtenidos:', data)), // Opcional: Log de datos
        catchError(error => {
          console.error('❌ Error al obtener proveedores:', error);
          return throwError(() => new Error('No se pudieron obtener los proveedores. Inténtelo más tarde.'));
        })
      );
  }
}
