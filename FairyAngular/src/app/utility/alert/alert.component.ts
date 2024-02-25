import { Component, Inject, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AlertService } from './alert.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit{
     @Input() message: string = '';
     @Input() title: string = '';
     @Input() type: string = '';
     isVisible:boolean=false;
     
     constructor(@Inject(DOCUMENT) private document:Document, private elementRef: ElementRef, private alertService:AlertService) {
        this.alertService.alertState$.subscribe(state => {
          this.isVisible = state;
        });
     }
     ngOnInit(): void {
      // Agregar un oyente de eventos al documento global para detectar clics fuera de la alerta
      this.document.addEventListener('click', this.onDocumentClick.bind(this));
    }
  
    onDocumentClick(event: MouseEvent): void {
      // Verificar si el clic fue fuera de la alerta
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.closeAlert();
      }
    }
    ngOnDestroy(): void {
      // Remover el oyente de eventos cuando el componente es destruido para evitar pérdida de memoria
      this.document.removeEventListener('click', this.onDocumentClick);
    }

    closeAlert():void{
      this.isVisible = false;
    }
}
