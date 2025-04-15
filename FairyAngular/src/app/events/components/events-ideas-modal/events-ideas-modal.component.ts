import { Component, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ExpectationIdea } from '../../models/idea.interface';

@Component({
  selector: 'app-events-ideas-modal',
  templateUrl: './events-ideas-modal.component.html',
  styleUrls: ['./events-ideas-modal.component.css']
})
export class EventsIdeasModalComponent implements OnChanges, OnDestroy {
  @Input() isModalOpen = false;
  @Input() ideas: ExpectationIdea[] = [];
  @Output() close = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isModalOpen']) {
      if (this.isModalOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    }
  }

  ngOnDestroy(): void {
    // Aseguramos que se limpie el estado al destruir el componente
    document.body.classList.remove('modal-open');
  }

  // ❗ Emitir evento sería ideal si querés que el padre cierre el modal
  // Por ahora simplemente emitimos una acción sin modificar @Input
  onCloseClick(): void {
    document.body.classList.remove('modal-open');
    // Aquí podrías emitir un Output si el padre debe cerrar
     this.close.emit();
  }
}
