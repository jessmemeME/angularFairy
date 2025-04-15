import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category} from '../models/category.interface';
import { ExpectationClassification } from '../models/idea.interface'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:5229/api';
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  });
  constructor(private http: HttpClient) { }

   getStyleCategories(): Observable<Category[]> {
    const apiEndpoint = `${this.apiUrl}/Brief/ListClassificationSegmentStyle`;
    return this.http.get<Category[]>(apiEndpoint, { headers: this.headers });
   }

   getIdeas(): Observable<ExpectationClassification[]> {
    const apiEndpoint = `${this.apiUrl}/Brief/ListExpectationsIdeas`;
    return this.http.get<ExpectationClassification[]>(apiEndpoint, { headers: this.headers });
   }

}
