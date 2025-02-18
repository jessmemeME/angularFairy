import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';

interface Event {
  id: number;
  name: string;
  clientName: string;
  coupleType: string;
  event_start_date: Date;
  event_state: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchControl = new FormControl('');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEvents();

    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string | null) => {
        if (value !== null) {
          this.filterEvents(value);
        } else {
          this.filteredEvents = this.events;
        }
      });
  }

  loadEvents(): void {
    this.http.get<Event[]>('/api/Event/ListAll/Event').subscribe(response => {
      this.events = response;
      this.filteredEvents = response;
    });
  }

  filterEvents(query: string): void {
    if (!query.trim()) {  // Se asegura de no filtrar si es una cadena vacía
      this.filteredEvents = this.events;
    } else {
      const lowerQuery = query.toLowerCase();
      this.filteredEvents = this.events.filter(event =>
        event.name.toLowerCase().includes(lowerQuery) ||
        event.clientName.toLowerCase().includes(lowerQuery) ||
        event.coupleType.toLowerCase().includes(lowerQuery) ||
        event.event_start_date.toString().includes(lowerQuery) ||
        event.event_state.toLowerCase().includes(lowerQuery)
      );
    }
  }
}
