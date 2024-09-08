import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular'; // Importa el componente de FullCalendar
import { CalendarOptions } from '@fullcalendar/core'; // Importar desde @fullcalendar/core
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin para la vista de cuadrícula diaria
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin para la vista de tiempo
import interactionPlugin from '@fullcalendar/interaction'; // Plugin para la interacción (selección, clic, etc.)

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent; // ¡Usa el Non-null assertion operator!

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Vista inicial: cuadrícula mensual
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], // Plugins de FullCalendar
    headerToolbar: { // Configuración de la barra de herramientas superior
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true, // Permitir edición de eventos (arrastrar, cambiar tamaño)
    selectable: true, // Permitir seleccionar fechas
    selectMirror: true,
    dayMaxEvents: true, // Mostrar '+X más' si hay muchos eventos en un día
    events: [ // Eventos de ejemplo
      { title: 'Evento de prueba 1', date: '2024-09-10' },
      { title: 'Evento de prueba 2', date: '2024-09-12' }
    ],
    dateClick: this.handleDateClick.bind(this), // Manejador para clics en una fecha
    eventClick: this.handleEventClick.bind(this) // Manejador para clics en un evento
  };

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar eventos desde una API si es necesario
  }

  // Manejador que se ejecuta cuando se hace clic en una fecha
  handleDateClick(arg: any) {
    alert('Fecha seleccionada: ' + arg.dateStr);
  }

  // Manejador que se ejecuta cuando se hace clic en un evento
  handleEventClick(clickInfo: any) {
    alert('Evento seleccionado: ' + clickInfo.event.title);
  }

  // Acceder a la instancia de la API de FullCalendar para manipular el calendario
  get calendarApi() {
    return this.calendarComponent.getApi();
  }
}
