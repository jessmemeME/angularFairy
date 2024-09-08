import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular'; // Importa el componente de FullCalendar
import { CalendarOptions } from '@fullcalendar/core'; // Importar desde @fullcalendar/core
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin para la vista de cuadrícula diaria
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin para la vista de tiempo
import interactionPlugin from '@fullcalendar/interaction'; // Plugin para la interacción (selección, clic, etc.)
import { Draggable } from '@fullcalendar/interaction';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';// Importa el componente del modal

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    droppable: true, // Habilitar droppable para arrastrar eventos desde fuera del calendario
    events: [
      { title: 'Evento de prueba 1', date: '2024-09-10' },
      { title: 'Evento de prueba 2', date: '2024-09-12' },
      {
        start: '2024-09-15',
        end: '2024-09-17',
        rendering: 'background', // Este evento es de fondo
        color: '#ff9f89' // Color del fondo del evento
      },
      {
        start: '2024-09-20',
        end: '2024-09-22',
        rendering: 'background', // Otro evento de fondo
        color: '#ffcc80' // Otro color de fondo
      }
    ],
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventReceive: this.handleEventReceive.bind(this) // Agregar el manejador de evento
  };

  constructor() {}

  ngOnInit(): void {}

  // Manejador que se ejecuta cuando se hace clic en una fecha
  handleDateClick(arg: any) {
    alert('Fecha seleccionada: ' + arg.dateStr);
  }

  // Manejador que se ejecuta cuando se hace clic en un evento
  handleEventClick(clickInfo: any) {
    alert('Evento seleccionado: ' + clickInfo.event.title);
  }

  // Función para agregar un nuevo evento al calendario
  addEvent() {
    const calendarApi = this.calendarComponent.getApi();
    const newEventTitle = prompt('Ingrese el título del evento:');
    const newEventDate = prompt('Ingrese la fecha del evento (YYYY-MM-DD):');

    if (newEventTitle && newEventDate) {
      calendarApi.addEvent({
        title: newEventTitle,
        start: newEventDate
      });
    }
  }

  addBackgroundEvent() {
    const calendarApi = this.calendarComponent.getApi();
    const newEventStart = prompt('Ingrese la fecha de inicio del evento (YYYY-MM-DD):');
    const newEventEnd = prompt('Ingrese la fecha de fin del evento (YYYY-MM-DD):');
    
    if (newEventStart && newEventEnd) {
      calendarApi.addEvent({
        start: newEventStart,
        end: newEventEnd,
        rendering: 'background',
        color: '#ffcc80' // Color personalizado para el evento de fondo
      });
    }
  }

  // Acceder a la instancia de la API de FullCalendar para manipular el calendario
  get calendarApi() {
    return this.calendarComponent.getApi();
  }

  // Manejador que se ejecuta cuando un evento es soltado en el calendario
  handleDrop(eventInfo: any) {
    console.log('Evento soltado en el calendario: ', eventInfo);
  }
  
  // Manejador cuando un nuevo evento es arrastrado desde fuera y colocado en el calendario
  handleEventReceive(info: any) {
    alert('Nuevo evento agregado: ' + info.event.title);
    this.removeEventFromExternalList(info.event.title); // Llamar a la función para eliminar el evento
  }

  // Función para eliminar el evento de la lista externa
  removeEventFromExternalList(eventTitle: string) {
    this.externalEvents = this.externalEvents.filter(event => event.title !== eventTitle);
  }

  externalEvents = [
    { title: 'Evento 1', id: 1 },
    { title: 'Evento 2', id: 2 },
    { title: 'Evento 3', id: 3 }
  ];
    
  ngAfterViewInit() {
    let containerEl = document.getElementById('external-events');
    if (containerEl) {  // Verifica si el elemento existe
      new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
          return {
            title: eventEl.innerText.trim()
          };
        }
      });
    } else {
      console.error('Elemento "external-events" no encontrado.');
    }
  }
}
