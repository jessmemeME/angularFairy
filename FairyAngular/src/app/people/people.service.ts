import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, Observable } from 'rxjs';
import { Client} from '../../models/clients.model'//llamamos a nuestra interface
import { People } from '../../models/basic-info.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = 'http://localhost:5229';
  
  constructor(private http: HttpClient) { }

  RegisterClientsAllForm( people:People,locations:any[],contacts:any[],client_invoice:any[]):Observable<any>{

    console.log(locations);
    console.log(contacts);
    console.log(client_invoice);

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });
    const body=JSON.stringify({BasicInfoPeople:people,Contacts:contacts,Locations:locations,BusinessInvoiceData:client_invoice});
    return this.http.post<any>(`${this.apiUrl}/People/RegisterPeopleWithAllData`, body, { headers: headers}).pipe();
  }

  getLocations():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/Locations/getAllDepartamentsCities`);
  }
  
  getDocumentTypes():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/BasicInfo/ListAllDocumentTypes`);
  }

  getPeopleByDocumentNumber(documentNumber:string,documentType:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/People/PeobleByDocumentNumber?document_number=${documentNumber}&document_type_id=1${documentType}`);
  }
  
  getAllGender():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/BasicInfo/ListAllGenders`);
  }

  getBussinessInvoiceDataByRuc(ruc:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/Business/BusinessInvoiceDataByRuc?document_number=${ruc}`);
  }  
  getAllContactTypes():Observable<any>{ 
    return this.http.get<any>(`${this.apiUrl}/BasicInfo/listAllContactType`);
  }
}
