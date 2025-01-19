import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Draggable } from '@fullcalendar/interaction';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import esLocale from '@fullcalendar/core/locales/es';

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
    locale: esLocale, // Cambiar el idioma a español
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    eventContent: function(info) {
      if (info.event.extendedProps["rendering"] === 'background') {
        //return { html: `<div class="background-event">${info.event.extendedProps.description}</div>` };
        return { html: `<div class="background-event">${info.event.extendedProps["description"]}</div>` };
      } 
    return {};
    },
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    droppable: true, // Habilitar eventos arrastrables
    events: [
      { title: 'Boda Ali y Maxi', date: '2024-09-10' },
      { title: 'Boda Ani y Marce', date: '2024-09-12' },
      {
        start: '2024-09-15',
        end: '2024-09-17',
        rendering: 'background',
        color: '#ff9f89',
        description: 'Evento de Fondo 1'
      },
      {
        start: '2024-09-20',
        end: '2024-09-22',
        rendering: 'background',
        color: '#ffcc80',
        description: 'Evento de Fondo 2'
      }
    ],
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventReceive: this.handleEventReceive.bind(this),
    eventDidMount: function(info) {
      if (info.event.extendedProps["rendering"] === 'background') {
        const tooltip = document.createElement('div');
        tooltip.innerText = info.event.extendedProps["description"];
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.top = '5px';
        tooltip.style.left = '5px';
        info.el.appendChild(tooltip);
      }
    }
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  handleDateClick(arg: any) {
    alert('Fecha seleccionada: ' + arg.dateStr);
  }

  handleEventClick(clickInfo: any) {
    alert('Evento seleccionado: ' + clickInfo.event.title);
  }

  getDialogWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return '95%';  // Ancho completo en móviles
    } else if (screenWidth < 992) {
      return '80%';  // Ancho en tablets
    } else {
      return '500px';  // Ancho fijo en pantallas grandes
    }
  }

  // Abrir modal para agregar un nuevo evento
  addEvent() {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: this.getDialogWidth(),
      data: { title: '', date: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title && result.date) {
        const calendarApi = this.calendarComponent.getApi();
        calendarApi.addEvent({
          title: result.title,
          start: result.date
        });
      }
    });
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
        color: '#ffcc80' // Color personalizado para evento de fondo
      });
    }
  }

  get calendarApi() {
    return this.calendarComponent.getApi();
  }

  handleDrop(eventInfo: any) {
    console.log('Evento soltado en el calendario: ', eventInfo);
  }
  
  handleEventReceive(info: any) {
    alert('Nuevo evento agregado: ' + info.event.title);
    this.removeEventFromExternalList(info.event.title);
  }

  removeEventFromExternalList(eventTitle: string) {
    this.externalEvents = this.externalEvents.filter(event => event.title !== eventTitle);
  }

  externalEvents = [
    { title: 'Tarea 1', id: 1 },
    { title: 'Tarea 2', id: 2 },
    { title: 'Tarea 3', id: 3 }
  ];
    
  ngAfterViewInit() {
    let containerEl = document.getElementById('external-events');
    if (containerEl) {
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
