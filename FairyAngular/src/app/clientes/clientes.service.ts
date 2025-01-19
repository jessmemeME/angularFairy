import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, Observable } from 'rxjs';
import { Clients} from '../../models/clients.model'//llamamos a nuestra interface
import { People } from '../../models/basic-info.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiUrl = 'http://localhost:5229';
  
    constructor(private http: HttpClient) { }
  
    registerClientAndPeopleStep1(client:Clients, people:People):Observable<any>{
      console.log(client);
      console.log(people);

      const headers = new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      });


      return this.http.post<People>(`${this.apiUrl}/People/RegisterPeople`, people,{ headers: headers}).pipe(
        concatMap((peopleCreated) => {
          console.log(peopleCreated);
          // Una vez que la persona se ha creado, asignamos el ID de la persona al cliente
          client.people_id = peopleCreated.id; // Suponiendo que 'id' es el campo que se retorna
          // Luego, creamos el cliente con la persona recién creada
          return this.http.post<Clients>(`${this.apiUrl}/Clients/RegisterClients`, client,{ headers: headers});
        })
      );
    }

    /*postData(data:Clients ): Observable<any> {
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
    }*/
}
