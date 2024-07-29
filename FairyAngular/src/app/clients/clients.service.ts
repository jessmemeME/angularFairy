import { Injectable } from '@angular/core';
//importamos
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from "rxjs/operators";
import { Clients} from '../../models/clients.model'//llamamos a nuestra interface


@Injectable({
  providedIn: 'root'
})
export class ClientsService {


  private apiUrl = 'http://localhost:5229';

  constructor(private http: HttpClient) { }

  getDataWithHeader(): Observable<Clients[]> {
    // Definir el encabezado que deseas agregar
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

      // Agrega otros encabezados según sea necesario
    });

    // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
    return this.http.get<Clients[]>(`${this.apiUrl}/Clients/ListAllClients`, { headers: headers }).pipe(tap((data) => console.log("")));
  }

  postData(data:Clients ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    

    const body=JSON.stringify(data);
    console.log(body)
    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Clients/RegisterClients`, data, { headers: headers}).pipe(tap((data => console.log(""))));
  }

  updateData(data:Clients ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Clients/UpdateClients`, data, { headers: headers}).pipe(tap((data => console.log("data"))));
  }


  deleteData(data:Clients ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Clients/DeleteAccount`, data, { headers: headers}).pipe(tap((data => console.log("data"))));
  }
}
/*
import { Injectable } from '@angular/core';
//importamos
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from "rxjs/operators";
import { Clients, UserGroupPermissionsUpdate, UserPermissionsWithCheck } from '../../models/Clients.model'//llamamos a nuestra interface

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = 'http://localhost:5229';

  constructor(private http: HttpClient) { }

  getDataWithHeader(): Observable<Clients[]> {
    // Definir el encabezado que deseas agregar
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

      // Agrega otros encabezados según sea necesario
    });

    // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
    return this.http.get<Clients[]>(`${this.apiUrl}/Clients/ListAllClients`, { headers: headers }).pipe(tap((data) => console.log("")));
  }

  postData(data:Clients ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    

    const body=JSON.stringify(data);
    console.log(body)
    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Clients/RegisterClients`, data, { headers: headers}).pipe(tap((data => console.log(""))));
  }

  updateData(data:Clients ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Clients/UpdateClients`, data, { headers: headers}).pipe(tap((data => console.log("data"))));
  }


  deleteData(data:Clients ): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/Clients/DeleteAccount`, data, { headers: headers}).pipe(tap((data => console.log("data"))));
  }
  asignPermissions(data:UserGroupPermissionsUpdate):Observable<any>{
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });
    const body = JSON.stringify(data);
    return this.http.post<any>(`${this.apiUrl}/Clients/AsingPermisionToUser`,data, {headers:headers}).pipe(tap((data => 
        console.log("se carga los dats")
        
      )));
  }
  GetPermissionsById(user_id:string):Observable<UserPermissionsWithCheck[]>{
      // Definir el encabezado que deseas agregar
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  
        // Agrega otros encabezados según sea necesario
      });
  
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<UserPermissionsWithCheck[]>(`${this.apiUrl}/Clients/GetPermissionsById/`+ user_id , { headers: headers }).pipe(tap((data) => console.log("" )));
  }
}



*/