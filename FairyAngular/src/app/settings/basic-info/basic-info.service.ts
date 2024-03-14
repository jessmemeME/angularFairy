//basic-info.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  AgeGroup,
  DocumentType,
  Gender,
  RelationshipBusiness,
  TypeOfDiner,
  Tradition,
  Culture,
  Religion
} from '../../../models/basic-info.model';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoService {
  private apiUrl = 'http://localhost:5229';

  constructor(private http: HttpClient) { }

  // Definir el encabezado que deseas agregar
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        // Agrega otros encabezados según sea necesario
    });
  }

  //------------------------------------------------------------------------------------------------------------------------------
  // #region AgeGroup

  //getDataWithHeader(): Observable<AgeGroup[]> {
  ListAllAgeGroups(): Observable<AgeGroup[]> {
    const headers = this.createHeaders();
    // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
    return this.http.get<AgeGroup[]>(`${this.apiUrl}/BasicInfo/ListAllAgeGroups`, { headers }).pipe(tap(() => {}));
  }

  //postData(data: AgeGroup): Observable<any> {
  RegisterAgeGroup(data: AgeGroup): Observable<any> {
    const headers = this.createHeaders();
    const body = JSON.stringify(data);
// Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterAgeGroup`, data, { headers }).pipe(tap(() => {}));
  }


  UpdateAgeGroups(data:AgeGroup ): Observable<any> {
    const headers = this.createHeaders();
    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateAgeGroups`, data, { headers: headers}).pipe(tap((data => {})));
  }


  DeleteAgeGroups(data:AgeGroup ): Observable<any> {
    const headers = this.createHeaders();
    const body=JSON.stringify(data);

    // Realizar una solicitud POST con datos en el cuerpo
    return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteAgeGroups`, data, { headers: headers}).pipe(tap((data => {})));
  }
  //endregion
  //------------------------------------------------------------------------------------------------------------------------------
  
  //------------------------------------------------------------------------------------------------------------------------------
  //region DocumentType

  //getDataWithHeader(): Observable<DocumentType[]> {
    ListAllDocumentTypes(): Observable<DocumentType[]> {
      const headers = this.createHeaders();
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<DocumentType[]>(`${this.apiUrl}/BasicInfo/ListAllDocumentTypes`, { headers }).pipe(tap(() => {}));
    }
  
    //postData(data: DocumentType): Observable<any> {
    RegisterDocumentType(data: DocumentType): Observable<any> {
      const headers = this.createHeaders();
      const body = JSON.stringify(data);
  // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterDocumentType`, data, { headers }).pipe(tap(() => {}));
    }
  
  
    UpdateDocumentType(data:DocumentType ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateDocumentType`, data, { headers: headers}).pipe(tap((data => {})));
    }
  
  
    DeleteDocumentType(data:DocumentType ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteDocumentType`, data, { headers: headers}).pipe(tap((data => {})));
    }

  //endregion
  //------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------
  //region Gender

  //getDataWithHeader(): Observable<Gender[]> {
    ListAllGenders(): Observable<Gender[]> {
      const headers = this.createHeaders();
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<Gender[]>(`${this.apiUrl}/BasicInfo/ListAllGenders`, { headers }).pipe(tap(() => {}));
    }
  
    //postData(data: Gender): Observable<any> {
    RegisterGender(data: Gender): Observable<any> {
      const headers = this.createHeaders();
      const body = JSON.stringify(data);
  // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterGender`, data, { headers }).pipe(tap(() => {}));
    }
  
  
    UpdateGender(data:Gender ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateGender`, data, { headers: headers}).pipe(tap((data => {})));
    }
  
  
    DeleteGender(data:Gender ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteGender`, data, { headers: headers}).pipe(tap((data => {})));
    }

  //endregion
  //------------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------------
  //region RelationshipBusiness

  //getDataWithHeader(): Observable<RelationshipBusiness[]> {
    ListAllRelationshipBusiness(): Observable<RelationshipBusiness[]> {
      const headers = this.createHeaders();
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<RelationshipBusiness[]>(`${this.apiUrl}/BasicInfo/ListAllRelationshipBusiness`, { headers }).pipe(tap(() => {}));
    }
  
    //postData(data: RelationshipBusiness): Observable<any> {
    RegisterRelationshipBusiness(data: RelationshipBusiness): Observable<any> {
      const headers = this.createHeaders();
      const body = JSON.stringify(data);
  // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterRelationshipBusiness`, data, { headers }).pipe(tap(() => {}));
    }
  
  
    UpdateRelationshipBusiness(data:RelationshipBusiness ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateRelationshipBusiness`, data, { headers: headers}).pipe(tap((data => {})));
    }
  
  
    DeleteRelationshipBusiness(data:RelationshipBusiness ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteRelationshipBusiness`, data, { headers: headers}).pipe(tap((data => {})));
    }

  //endregion
  //------------------------------------------------------------------------------------------------------------------------------
   //------------------------------------------------------------------------------------------------------------------------------
  //region TypeOfDiner

  //getDataWithHeader(): Observable<TypeOfDiner[]> {
    ListAllTypeOfDiners(): Observable<TypeOfDiner[]> {
      const headers = this.createHeaders();
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<TypeOfDiner[]>(`${this.apiUrl}/BasicInfo/ListAllTypeOfDiners`, { headers }).pipe(tap(() => {}));
    }
  
    //postData(data: TypeOfDiner): Observable<any> {
    RegisterTypeOfDiner(data: TypeOfDiner): Observable<any> {
      const headers = this.createHeaders();
      const body = JSON.stringify(data);
  // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterTypeOfDiner`, data, { headers }).pipe(tap(() => {}));
    }
  
  
    UpdateTypeOfDiner(data:TypeOfDiner ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateTypeOfDiner`, data, { headers: headers}).pipe(tap((data => {})));
    }
  
  
    DeleteTypeOfDiner(data:TypeOfDiner ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteTypeOfDiner`, data, { headers: headers}).pipe(tap((data => {})));
    }

  //endregion
  //------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------
  //region Tradition

  //getDataWithHeader(): Observable<Tradition[]> {
    ListAllTraditions(): Observable<Tradition[]> {
      const headers = this.createHeaders();
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<Tradition[]>(`${this.apiUrl}/BasicInfo/ListAllTraditions`, { headers }).pipe(tap(() => {}));
    }
  
    //postData(data: Tradition): Observable<any> {
    RegisterTradition(data: Tradition): Observable<any> {
      const headers = this.createHeaders();
      const body = JSON.stringify(data);
  // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterTradition`, data, { headers }).pipe(tap(() => {}));
    }
  
  
    UpdateTradition(data:Tradition ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateTradition`, data, { headers: headers}).pipe(tap((data => {})));
    }
  
  
    DeleteTradition(data:Tradition ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteTradition`, data, { headers: headers}).pipe(tap((data => {})));
    }

  //endregion
  //------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------
  //region Culture

  //getDataWithHeader(): Observable<Culture[]> {
    ListAllCultures(): Observable<Culture[]> {
      const headers = this.createHeaders();
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<Culture[]>(`${this.apiUrl}/BasicInfo/ListAllCultures`, { headers }).pipe(tap(() => {}));
    }
  
    //postData(data: Culture): Observable<any> {
    RegisterCulture(data: Culture): Observable<any> {
      const headers = this.createHeaders();
      const body = JSON.stringify(data);
  // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterCulture`, data, { headers }).pipe(tap(() => {}));
    }
  
  
    UpdateCulture(data:Culture ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateCulture`, data, { headers: headers}).pipe(tap((data => {})));
    }
  
  
    DeleteCulture(data:Culture ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteCulture`, data, { headers: headers}).pipe(tap((data => {})));
    }

  //endregion
  //------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------
  //region Religion

  //getDataWithHeader(): Observable<Religion[]> {
    ListAllReligions(): Observable<Religion[]> {
      const headers = this.createHeaders();
      // Realizar la solicitud GET con el encabezado llamando al ENDPOINT del backend
      return this.http.get<Religion[]>(`${this.apiUrl}/BasicInfo/ListAllReligions`, { headers }).pipe(tap(() => {}));
    }
  
    //postData(data: Religion): Observable<any> {
    RegisterReligion(data: Religion): Observable<any> {
      const headers = this.createHeaders();
      const body = JSON.stringify(data);
  // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/RegisterReligion`, data, { headers }).pipe(tap(() => {}));
    }
  
  
    UpdateReligion(data:Religion ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/UpdateReligion`, data, { headers: headers}).pipe(tap((data => {})));
    }
  
  
    DeleteReligion(data:Religion ): Observable<any> {
      const headers = this.createHeaders();
      const body=JSON.stringify(data);
  
      // Realizar una solicitud POST con datos en el cuerpo
      return this.http.post<any>(`${this.apiUrl}/BasicInfo/DeleteReligion`, data, { headers: headers}).pipe(tap((data => {})));
    }

  //endregion
  //------------------------------------------------------------------------------------------------------------------------------

}

