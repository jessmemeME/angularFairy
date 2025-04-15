import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventsService } from '../services/events.service';
import { Category } from '../models/category.interface';
import { ExpectationClassification } from '../models/idea.interface';

@Injectable({ providedIn: 'root' })
export class BriefRepository {
  constructor(private api: EventsService) { }

  getAll(): Observable<Category[]> {
    return this.api.getStyleCategories().pipe(
      catchError(err => {
        console.error('❌ Error al obtener categorías:', err);
        return throwError(() => new Error('No se pudieron cargar las categorías.'));
      })
    );
  }
  getAllIdeas(): Observable<ExpectationClassification[]> {
    return this.api.getIdeas().pipe(
      catchError(err => {
        console.error('❌ Error al obtener categorías:', err);
        return throwError(() => new Error('No se pudieron cargar las categorías.'));
      })
    );
  }
}