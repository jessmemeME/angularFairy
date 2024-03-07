import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login,Code, email } from '../../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  constructor(private http:HttpClient) {}
  private apiBaseUrl = 'http://localhost:5229';
  private commonHeader = new HttpHeaders({
    'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  })
  VerifyCode(Email:email): Observable<Code> {
      
      return this.http.post<any>(
        `${this.apiBaseUrl}/Login/VerifyCode`, Email, {headers: this.commonHeader})
        .pipe(
          tap(
            (data)=>{
              console.log(data, "VerifyCode");
              return data;
            }
          )
        );
  }

  Validated(Email:email): Observable<any> {
    
    return this.http.post<any>(
      `${this.apiBaseUrl}/Login/Validated`, Email, {headers: this.commonHeader})
      .pipe(
        tap(
          (data)=>{
            console.log(data, "VerifyCode");
            return data;
          }
        )
      );
}
}
