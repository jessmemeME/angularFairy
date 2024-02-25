import { Injectable } from '@angular/core';
import {Login} from '../../models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:5229';
  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  });

  login(data:Login): Observable<any>{
    console.log(data,'data');
    return this.http.post<any>(`${this.apiUrl}/Login/Login`, data, {headers:this.headers})
    .pipe(
      map(response => {
          return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }

}
