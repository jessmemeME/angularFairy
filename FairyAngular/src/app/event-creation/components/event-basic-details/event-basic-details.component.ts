import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-event-basic-details',
  templateUrl: './event-basic-details.component.html',
  styleUrl: './event-basic-details.component.css'
})
export class EventBasicDetailsComponent {
  @Input() formGroup!: FormGroup;
}
