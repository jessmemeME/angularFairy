import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from "rxjs/operators";
import {Accounts} from "../../models/accounts.model"

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private apiUrl = 'http://localhost:5229';

  constructor(private http: HttpClient) { }

  getDataWithHeader(): Observable<Accounts[]> {
    // Definir el encabezado que deseas agregar
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

      // Agrega otros encabezados según sea necesario
    });

    // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
    return this.http.get<Accounts[]>(`${this.apiUrl}/Accounts/ListAllAccounts`, { headers: headers }).pipe(tap((data) => console.log("All: "+ JSON.stringify(data))));
  }

  postData(data:Accounts ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Accounts/RegisterAccounts`, data, { headers: headers}).pipe(tap((data => console.log(data))));
  }

  updateData(data:Accounts ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Accounts/UpdateAccounts`, data, { headers: headers}).pipe(tap((data => console.log(data))));
  }


  deleteData(data:Accounts ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Accounts/DeleteAccounts`, data, { headers: headers}).pipe(tap((data => console.log(data))));
  }

  
}
